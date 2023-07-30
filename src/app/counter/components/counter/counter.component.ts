import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>Hola Counter</h1>
    <h1>{{title}}</h1>
    <hr>
    <h3>Counter:{{counter}}</h3>
    <button class="bg-indigo-500 mr-2 p-2 text-white" (click)="increaseBy()">+1</button>
    <button class="bg-indigo-500 mr-2 p-2 text-white" (click)="decrementBy(2)">-1</button>
    <button class="bg-indigo-500 mr-2 p-2 text-white" (click)="resetCounter()">Reset</button>

    <hr> 
    `
})

export class CounterComponent  {
    public counter:number = 1;
    public title:string = "Hola mundo";
    
    increaseBy(){
        this.counter += 1;

    }
    decrementBy(value:number){
        this.counter -=value;

    }
    resetCounter(){
        this.counter = 0;
    }


}