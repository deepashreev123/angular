import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
//   templateUrl: './component1.component.html',
//   styleUrls: ['./component1.component.css']
// })
// export class Component1Component implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
 template: `
 <h2>
 Welcome {{name}}
 </h2>
 <input #myInput type="text">
 <button (click)="logMessege(myInput.value)">Log</button>
 `,
 styles: []
})
export class Component1Component implements OnInit {
 public name = "Codevolution";
 constructor() { }
 ngOnInit() {
 }
 logMessege(value){
   console.log(value);
 }
}

