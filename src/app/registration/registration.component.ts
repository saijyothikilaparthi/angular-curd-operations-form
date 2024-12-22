import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cards } from '../models/cards';
import { CardsService } from '../services/cards.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  record!: Cards
  
 constructor(private service: CardsService,private router:Router) {
   
     
 }
    
  ngOnInit(): void {
  this.adddetails();
  }
 
 adddetails(){
   this.service.add(this.record).subscribe(data => this.record=data)
 }
 onclick1(){
  this.router.navigate(['/cards'])
  
}

}

