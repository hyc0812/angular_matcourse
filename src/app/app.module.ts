import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialDesignModule} from "./material-design/material-design.module";
import { LoginComponent } from './auth/login/login.component';
import { TableComponent } from './table/table.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    GridListComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
