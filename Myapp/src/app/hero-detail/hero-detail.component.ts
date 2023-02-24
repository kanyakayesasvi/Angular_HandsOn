import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() inputHero:any;
  @Output() newHero= new EventEmitter();

  sendtoparent(hero:any){
    this.newHero.emit(hero);
    console.log("inside parent");

  }

  





}
