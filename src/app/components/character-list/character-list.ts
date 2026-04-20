import { Component, Input, effect, inject, signal } from '@angular/core';
import { Api } from '../../services/api';
import { Character } from '../../models/character';
import { CharacterDetails } from '../character-details/character-details';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterDetails],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {
  private api = inject(Api);

  @Input() houseFilter!: string;

  characters = signal<Character[]>([]);
  selectedCharacter = signal<Character | null>(null);

  constructor() {
    effect(() => {
      const house = this.houseFilter;

      if (house) {
        this.api.getCharactersByHouse(house).subscribe((data) => {
          this.characters.set(data);
          this.selectedCharacter.set(null);
        });
      } else {
        this.api.getCharacters().subscribe((data) => {
          this.characters.set(data);
          this.selectedCharacter.set(null);
        });
      }
    });
  }

  selectCharacter(character: Character): void {
    this.selectedCharacter.set(character);
  }
}