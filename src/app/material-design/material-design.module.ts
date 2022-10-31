import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
  ]
})
export class MaterialDesignModule { }
