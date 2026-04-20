import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './character-search.html',
  styleUrl: './character-search.css'
})
export class CharacterSearch {
  @Output() houseSelected = new EventEmitter<string>();

  selectedHouse = '';

  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onHouseChange(): void {
    this.houseSelected.emit(this.selectedHouse);
  }
}