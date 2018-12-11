import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  searchTask : String;
  searchParent: String;
  searchPriorityFrom: Number;
  searchPriorityTo: Number;
  searchStartDate: Date;
  searchEndDate: Date;
  tasks : Task[];
  task: Task;
  constructor(private taskService: TaskService) { }
  getTasks() : void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

  public openConfirmationDialog(id:String) {
   if(confirm("Are you sure to end this task?")){
     this.save(id);
   }
  }

  goBack(): void{
    
  }

  save(task): void {
    alert(task.taskId);
    //this.task = new Task({"taskId":id,"active":false});
    task.active = false;
    this.taskService.updateTask(task)
      .subscribe(() => this.goBack());
  }

}
