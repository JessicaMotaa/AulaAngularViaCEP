import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ 
  FooterComponent, 
  HomeComponent],


  imports: [
    CommonModule
  ],
  exports:[
  FooterComponent, 
  HomeComponent]
})

export class TemplateModule { }
