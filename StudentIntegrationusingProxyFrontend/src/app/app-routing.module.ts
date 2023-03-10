import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { GetStudentComponent } from './get-student/get-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'getstudent',
    component:GetStudentComponent
  },
  {
    path:'createstudent',
    component:CreateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
