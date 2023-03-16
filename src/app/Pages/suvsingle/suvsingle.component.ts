import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-suvsingle',
  templateUrl: './suvsingle.component.html',
  styleUrls: ['./suvsingle.component.css']
})
export class SuvsingleComponent {
  constructor(private hero:HeroService){}
  data=this.hero.givData()
  
  single :any
  ngOnInit(){
    let id= Number(localStorage.getItem('id'))
    this.single=data.filter(e => e.id==id)//filteration //arrrow function
    console.log("name",this.single)
  }

}
