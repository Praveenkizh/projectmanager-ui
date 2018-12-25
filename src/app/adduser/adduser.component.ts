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
  constructor(private userservice:UserService,private route: ActivatedRoute,private location: Location) { }

 
  ngOnInit() {
    this.user = new User({"userId": 0});
  }
  goBack(): void{
    
    this.location.back();
  }

  save(): void {
    alert('1'+this.user);
    this.userservice.createUser(this.user)
    .subscribe(() => this.goBack());
  }

}
