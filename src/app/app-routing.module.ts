import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  { path: 'addproject', component: AddprojectComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'adduser', component:AdduserComponent},
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'addtask/:id', component: AddtaskComponent },
  { path: 'edittask/:id', component: EdittaskComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
