import { Component } from '@angular/core';
import { FormControl, Validators ,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveForm';
  name= new FormControl('',Validators.minLength(9))




  updateName(){
    console.log(this.name.value)
    console.log(this.name.errors);

    this.name.setValue('yesasvi');
  }
}
