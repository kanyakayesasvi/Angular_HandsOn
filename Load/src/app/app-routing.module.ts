import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'test'
  },
  {
    path:'test',
    loadChildren: () =>import ('./test1/test1.module').then(t=>t.Test1Module)
  },
  {
    path:'sectest',
    loadChildren:()=>import('./test2/test2.module').then(t=>t.Test2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
