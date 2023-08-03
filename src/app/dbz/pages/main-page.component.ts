import { Component } from '@angular/core';
import { DBZServices } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {
   constructor(private dbzService:DBZServices) {}

   get characters(): Character[]{
    return [...this.dbzService.characters];
   }

    deleteCharacter (id: string):void {
     this.dbzService.deleteCharacter(id)
   }

   onNewCharacter(character:Character):void {
    this.dbzService.addCharacter(character);
   }
}