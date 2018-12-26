import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user:User): Observable<any> {
    alert('2'+user);
    return this.http.post('http://localhost:8090/user/create/', user, httpOptions);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8090/user/list');
  }
}
