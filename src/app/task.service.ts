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

  updateTask (task: Task): Observable<any> {
    console.log(task);
    task.parentTask = new ParentTask({"parentId":task.parentId, "parentTask":""})
    return this.http.post('http://localhost:8090/api/tasks/'+task.taskId, task, httpOptions);
    }
  getTask(taskId:Number): Observable<Task>{
    
    return this.http.get<Task>('http://localhost:8090/api/tasks/'+taskId);
  }
}
