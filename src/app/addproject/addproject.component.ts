import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  key:String;
  reverse:boolean = false ;
  public project:Project;
  public projects:Project[];
  constructor(private projectservice:ProjectService,private route: ActivatedRoute,private location: Location) { }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.project = new Project({"projectId": 0});
    this.getProjects();
  }

  goBack(): void{
    
    this.location.back();
  }
  getProjects(): void{
    this.projectservice.getProjects().subscribe(projects => this.projects = projects);
  }

  save(): void {
    
    this.projectservice.createProject(this.project)
    .subscribe(() => this.goBack());
  }

  getNotification(userId): void{
    this.project.managerId = userId;
  }

  edit(project): void {
    this.project = project;
    
    
  }
  isDisabled() : Boolean {
    
    return !this.project.setDate;
  }
}
