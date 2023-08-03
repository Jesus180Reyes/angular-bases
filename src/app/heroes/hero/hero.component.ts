import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './hero.component.html',
  // styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "ironMan";
  public age:  number = 45; 
  

  get capitalizeName() {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name = "Jesus";
  }

  changeAge() {
    this.age = 21;
  }

  resetForm():void {
    this.name = "ironman";
    this.age = 45;
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = "<h1>Desde Angular</>";
    });
  }

}
