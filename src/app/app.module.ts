import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { HttpClientModule }    from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { FilterTaskPipe }from './filters/filtertask.pipe';
import { FilterParentPipe } from './filters/filterparent.pipe';
import { FilterPriorityFrom } from './filters/filterpriorityfrom.pipe';
import { FilterPriorityTo } from './filters/filterpriorityto.pipe';
import { FilterEndDate } from './filters/filterenddate.pipe';
import { FilterStartDate } from './filters/filterstartdate.pipe';
import 'hammerjs';
import { EdittaskComponent } from './edittask/edittask.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddprojectComponent } from './addproject/addproject.component';
import { AdduserComponent } from './adduser/adduser.component';
import { NgbdModalUser } from './modal/modal-user';
import { NgbdModalProject } from './modal/modal-project';
import { NgbdModalParent } from './modal/modal-parent';
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    ViewtaskComponent,
    FilterTaskPipe,
    FilterParentPipe,
    FilterPriorityFrom,
    FilterPriorityTo,
    FilterStartDate,
    FilterEndDate,
    EdittaskComponent,
    AddprojectComponent,
    AdduserComponent,
    NgbdModalUser,
    NgbdModalProject,
    NgbdModalParent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    NgbModule.forRoot(),
    Ng2OrderModule
  ],
  // providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  // entryComponents: [ ConfirmationDialogComponent ]
})
export class AppModule { }
