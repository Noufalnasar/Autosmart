import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { SupportComponent } from './support/support/support.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'sidenav',component:HomeComponent
  },
  {
    path:'support',component:SupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
