import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';


@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  tasks : Task[];
  constructor(private taskService: TaskService) { }
  getTasks() : void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

}
