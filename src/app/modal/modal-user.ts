import {Component, Output, EventEmitter} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'ngbd-modal-user',
  templateUrl: './modal-user.html'
})
export class NgbdModalUser {
  closeResult: string;
  public user:User;
  public users:User[];
 @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal, private userService:UserService) {}

  notify(user){
      this.notifyParent.emit(user.userId);
      
  }
  ngOnInit() {
    this.user = new User({"userId": 0});
    this.getUser();
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

  getUser(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}