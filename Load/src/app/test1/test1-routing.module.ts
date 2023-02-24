import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:'test1'
  },
  {
    path:'test1',
    component: Comp1Component
  },
  {
    path:'test2',
    component:Comp2Component

  }







];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test1RoutingModule { }
