import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo:'test3'
  },
  {
    path:'test3',
    component:Comp3Component
  },
  {
    path:'test4',
    component:Comp4Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test2RoutingModule { }
