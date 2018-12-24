import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ParentTask } from './ParentTask';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8090/api/tasks');
  }

  createTask (task: Task): Observable<any> {
    console.log(task);
    if(task.isParent){
      return this.http.post('http://localhost:8090/parent/tasks/', task, httpOptions);
    } else{
    task.parentTask = new ParentTask({"parentId":task.parentId, "parentTask":""})
    if(task.taskId == task.parentId){
      task.parentTask.parentTask = task.task;
    }
    return this.http.post('http://localhost:8090/api/tasks/', task, httpOptions);
  }  
  }

    updateTask (task: Task): Observable<any> {
      console.log(task);
      task.parentTask = new ParentTask({"parentId":task.parentId, "parentTask":""})
      if(task.taskId == task.parentId){
        task.parentTask.parentTask = task.task;
      }
      return this.http.put('http://localhost:8090/api/tasks/'+task.taskId, task, httpOptions);
      }
  getTask(taskId:Number): Observable<Task>{
    
    return this.http.get<Task>('http://localhost:8090/api/tasks/'+taskId);
  }
    getTasksPage(page:number){
      return this.http.get('http://localhost:8090/api/tasksgroup?page='+page);
    }

}
