import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Task} from '../task';
import {TaskService} from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  private task:Task;
  constructor(private taskservice:TaskService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    //this.task = new Task({"id":"","title":""});
    this.getTask();
  }
  getTask(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      console.log('in componet - getTask'+id);
      if(id==0){
        this.task = new Task({"id":"","title":""});
      } else {
      this.taskservice.getTask(id).subscribe(task=>this.task = task);
      }
  }

  goBack(): void{
    
  }

  save(): void {
    this.taskservice.updateTask(this.task)
      .subscribe(() => this.goBack());
  }

}
