import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

const routes: Routes = [
  { path: 'addtask', component: AddtaskComponent },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'edittask/:id', component: AddtaskComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
