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
  public project:Project;
  public projects:Project[];
  constructor(private projectservice:ProjectService,private route: ActivatedRoute,private location: Location) { }

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
    alert(this.project.projectId);
    alert(this.project.project);
    this.projectservice.createProject(this.project)
    .subscribe(() => this.goBack());
  }

  getNotification(userId): void{
    alert(userId);
    this.project.managerId = userId;
  }

  edit(project): void {
    //alert(user.userId);
    this.project = project;
    
    
  }
}
