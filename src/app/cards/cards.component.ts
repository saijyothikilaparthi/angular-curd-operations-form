import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent { 
  records:Cards[]=[]
constructor(private service:CardsService){}
ngOnInit():void{
  this.service.getall().subscribe(data=>this.records=data)
  
}


}