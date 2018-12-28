import {Component, Output, EventEmitter} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../task.service';
import { ParentTask } from '../ParentTask';

@Component({
  selector: 'ngbd-modal-parent',
  templateUrl: './modal-parent.html'
})
export class NgbdModalParent {
  closeResult: string;
  public parentTask:ParentTask;
  public parentTasks:ParentTask[];
 @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal, private taskService:TaskService) {}

  notify(parentTask){
      this.notifyParent.emit(parentTask.parentId);
      
  }
  ngOnInit() {
    this.parentTask = new ParentTask({"userId": 0});
    this.getParentTasks();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-user-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getParentTasks(): void{
    this.taskService.getParentTasks().subscribe(parentTasks => this.parentTasks = parentTasks);
  }
}