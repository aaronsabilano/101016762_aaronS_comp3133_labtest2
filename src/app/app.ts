import { Component, signal } from '@angular/core';
import { CharacterList } from './components/character-list/character-list';
import { CharacterSearch } from './components/character-search/character-search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterList, CharacterSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '101016762-labtest2';

  selectedHouse = signal('');

  updateHouse(house: string): void {
    this.selectedHouse.set(house);
  }
}