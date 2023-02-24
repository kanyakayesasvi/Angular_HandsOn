import { Directive,ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appStudet]'
})
export class StudetDirective {

  @Input() rank:number=0;
  constructor(private el:ElementRef){

  }
  ngOnInit():void{
    console.log(this.rank)
    if(this.rank%2==0){
      this.el.nativeElement.style.backgroundColor='grey'
    }
    else{
      this.el.nativeElement.style.backgroundColor="white"
    }
  }


}
