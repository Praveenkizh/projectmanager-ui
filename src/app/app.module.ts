import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
