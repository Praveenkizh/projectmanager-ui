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
  page:number=0;
  pages:Array<Number>;
  constructor(private taskService: TaskService) { }
  getTasks() : void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  setPage(i, event:any){
    event.preventDefault();
    this.page = i;
    this.getTasksPage();
  }

  getTasksPage() : void{
    this.taskService.getTasksPage(this.page).subscribe(
      tasks => {this.tasks = tasks['content'];
                this.pages = new Array(tasks['totalPages'])
               });
  }

  ngOnInit() {
    //this.getTasks();
    this.getTasksPage();
  }

  public openConfirmationDialog(id:String) {
   if(confirm("Are you sure to end this task?")){
     this.save(id);
   }
  }

  goBack(): void{
    
  }

  save(task): void {
    
    //this.task = new Task({"taskId":id,"active":false});
    task.active = false;
    this.taskService.updateTask(task)
      .subscribe(() => this.goBack());
  }


}
