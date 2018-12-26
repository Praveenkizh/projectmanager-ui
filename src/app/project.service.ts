import { Injectable } from '@angular/core';
import { Project } from './Project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  createProject(project:Project): Observable<any> {
    return this.http.post('http://localhost:8090/project/create/', project, httpOptions);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:8090/project/list');
  }
}
