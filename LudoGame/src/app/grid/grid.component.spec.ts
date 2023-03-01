import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('getting the base possition for owner 1',()=>{
    let onwer:number=1;
    const result=component.getBasePositon(onwer);
    expect(result).toEqual({top:'40%' ,left:'6.66%'})
  })


  fit("getting the owner position of owner 2",()=>{
    let owner:number=2;
    const result=component.getBasePositon(owner);
    expect(result).toEqual({top:"6.66%",left:'53.32%'})
  })



  fit("getting the owner position of owner 3",()=>{
    let owner:number=3;
    const result=component.getBasePositon(owner);
    expect(result).toEqual({top:"53.32%",left:'86.68%'})
  })


  fit("getting the owner position of owner 4",()=>{
    let owner:number=4;
    const result=component.getBasePositon(owner);
    expect(result).toEqual({top:"86.68%",left:'40%'})
  })


  fit("getting the owner position default owner",()=>{
    let owner:number=7;
    const result=component.getBasePositon(owner);
    expect(result).toEqual({top:"0",left:'0'})
  })

  fit('checking for move',()=> {
    let p:any={
      direction:"left",
      ix: 1,
      iy: 2,
      x: 5,
      y: 6,
      ownerID:1,
      isPlaying: true,
      id:1
    };

    expect(p.isPlaying).toBe(true);


  });

  fit('checking for move',()=> {
    let p:any={
      direction:"left",
      ix: 1,
      iy: 2,
      x: 5,
      y: 6,
      ownerID:1,
      isPlaying: true,
      id:1
    };
    const res=component.move(p);
    // expect(p.isPlaying).toBe(true);
    expect(p.direction).toBe('up');
    expect(p.y).toBe(5);
    expect(p.x).toBe(6);

   // expect(p.y).toBe(5)

  });


  fit('checking for move',()=> {
    let p:any={
      direction:"left",
      ix: 1,
      iy: 2,
      x: 14,
      y: 6,
      ownerID:1,
      isPlaying: true,
      id:1
    };
    component.move(p);
    expect(p.direction).toBe('down');
    expect(p.iy).toBe(2);
    //expect(p.x).toBe(8);
    });

    fit("pin direction left", ()=>{
      let p:any={
      direction:"left",
      ix: 11,
      iy: 11,
      x: 11,
      y: 11,
      ownerID:1,
      isPlaying: false,
      id:9
    };
    component.move(p)
    expect(p.x).toBe(11);


    })

    fit("pin direction right", ()=>{
      let p:any={
      direction:"right",
      ix: 1,
      iy: 2,
      x: 14,
      y: 6,
      ownerID:2,
      isPlaying: true,
      id:1
    };
    component.move(p)
    expect(p.x).toBe(14);


    })


    fit("pin direction up", ()=>{
      let p:any={
      direction:"up",
      ix: 1,
      iy: 2,
      x: 14,
      y: 6,
      ownerID:3,
      isPlaying: true,
      id:1
    };
    component.move(p)
    expect(p.x).toBe(14);


    })



    fit("pin direction down", ()=>{
      let p:any={
      direction:"down",
      ix: 1,
      iy: 2,
      x: 14,
      y: 6,
      ownerID:4,
      isPlaying: true,
      id:1
    };
    component.move(p)
    expect(p.x).toBe(14);


    })



    fit('Gets Colour when i is 1', () =>{
      let i: number = 1;
      const res = component.getColor(i)
      expect(res).toEqual('#66BB6A');
    })
    fit('Gets Colour', () =>{
      let i: number = 2;
      const res = component.getColor(i)
      expect(res).toEqual('#FFF176');
    })
    fit('Gets Colour', () =>{
      let i: number = 3;
      const res = component.getColor(i)
      expect(res).toEqual('#29B6F6');
    })
    fit('Gets Colour', () =>{
      let i: number = 4;
      const res = component.getColor(i)
      expect(res).toEqual('#E53935');
    })
    fit('Gets Colour', () =>{
      let i: number = 5;//default
      const res = component.getColor(i)
      expect(res).toEqual('black');
    })














});
