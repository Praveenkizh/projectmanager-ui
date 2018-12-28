import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Task} from '../task';
import {TaskService} from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  public task:Task;
  constructor(private taskservice:TaskService,private route: ActivatedRoute,private location: Location) { }

  isDisabled() : Boolean {
    //alert(this.task.isParent);
    return this.task.isParent;
  }

  ngOnInit() {
    //this.task = new Task({"id":"","title":""});
    this.getTask();
  }
  getTask(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      alert('in componet - getTask'+id);
      if(id==0){
        this.task = new Task({"id":"","title":""});
      } else {
      this.taskservice.getTask(id).subscribe(task=>this.task = task);
      }
  }

  goBack(): void{
    
    this.location.back();
  }

 

  save(): void {
    this.taskservice.updateTask(this.task)
      .subscribe(() => this.goBack());
  }

}
