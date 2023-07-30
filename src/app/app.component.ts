import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public title:string = 'Hola mundo';
public counter:number = 1;


 increaseBy():void {
  this.counter +=1;
 }


 decrementBy(value:number):void {
  this.counter -= value;
 }

 resetCounter(){
  this.counter = 0;
 }
}
