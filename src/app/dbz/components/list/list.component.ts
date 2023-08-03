import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  // styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
 public deleteCharacter: EventEmitter<string> = new EventEmitter(); 

  @Input()
  public characterList:Character[] = [{
    id: uuid(),
    name: "Trunks",
    power: "10000"
  },
  {
    id: uuid(),
    name: "Peter La Anguila",
    power: "2500"
  }
]; 

  onDeleteCharacter(id:string):void {
    this.deleteCharacter.emit(id);
    console.log(id);

  }

}
