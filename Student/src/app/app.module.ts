import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

import { StudetDirective } from './studet.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudetDirective,
    StudentDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
