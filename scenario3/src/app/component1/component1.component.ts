import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styles: []
})
export class Component1Component implements OnInit {
  public name="madhuri"

  constructor(){}

  ngOnInit(){

  }
 public onClick(value){
   console.log(value);
 }
}

  
