import {Component, Output, EventEmitter} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'ngbd-modal-project',
  templateUrl: './modal-project.html'
})
export class NgbdModalProject {
  closeResult: string;
  public project:Project;
  public projects:Project[];
 @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal, private projectService:ProjectService) {}

  notify(project){
      this.notifyParent.emit(project.projectId);
      
  }
  ngOnInit() {
    this.project = new Project({"projectId": 0});
    this.getProject();
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

  getProject(): void{
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }
}