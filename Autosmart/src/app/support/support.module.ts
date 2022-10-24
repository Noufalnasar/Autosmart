import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support/support.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    SupportComponent
  ]
})
export class SupportModule { }
