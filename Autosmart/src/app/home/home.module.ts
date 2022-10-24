import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    HomeComponent,
    SidenavComponent

  ]
})
export class HomeModule { }
