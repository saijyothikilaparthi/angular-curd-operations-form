import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [{
  path:'',component:RegistrationComponent
},
{
  path:'cards',component:CardsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
