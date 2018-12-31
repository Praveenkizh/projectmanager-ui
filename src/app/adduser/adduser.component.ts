import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  public user:User;
  public users:User[];
  constructor(private userservice:UserService,private route: ActivatedRoute,private location: Location) { }

 
  ngOnInit() {
    this.user = new User({"userId": 0});
    this.getUsers();
  }

  getUsers(): void{
    this.userservice.getUsers().subscribe(users => this.users = users);
  }
  goBack(): void{
    
    this.location.back();
  }

  save(): void {
    
    this.userservice.createUser(this.user)
    .subscribe(() => this.goBack());
  }
  edit(user): void {
    alert(user.userId);
    this.user = user;
    
    
  }

}
