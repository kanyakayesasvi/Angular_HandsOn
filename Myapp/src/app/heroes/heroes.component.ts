import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
   constructor(private heroServices:HeroesService){}
   heroes=this.heroServices.getHeroes();
   selectedHero={id:0,name:""};
   heroCLick(hero:any){
    this.selectedHero=hero; 
   }
  updateHeroFromChild(hero: any){
      alert("hero recive");

    
   }

}
