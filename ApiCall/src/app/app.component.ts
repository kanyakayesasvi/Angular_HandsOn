import { Component } from '@angular/core';
import { mainData } from './model/data';
import { ApiService } from './Service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiCall';


  d:mainData[]=[];
  constructor(private apiService:ApiService) { }
  ngOnInit(): void {
    //console.log('ng on in it');

    this.apiService.getManagerViewReport().subscribe((data: mainData[]) => {
      console.log('data===>>>', data);
      this.d = data;
    })

  }
}
