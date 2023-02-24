import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test2RoutingModule } from './test2-routing.module';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


@NgModule({
  declarations: [
    Comp3Component,
    Comp4Component
  ],
  imports: [
    CommonModule,
    Test2RoutingModule
  ]
})
export class Test2Module { }
