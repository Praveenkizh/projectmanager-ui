import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  updateTask (task: Task): Observable<any> {
    console.log(task);
    return this.http.post('http://localhost:3000/tasks', task, httpOptions);
    }
  getTask(id:Number): Observable<Task>{
    
    return this.http.get<Task>('http://localhost:3000/tasks/'+id);
  }
}
