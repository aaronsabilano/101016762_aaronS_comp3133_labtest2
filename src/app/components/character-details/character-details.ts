import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-details',
  standalone: true,
  templateUrl: './character-details.html',
  styleUrl: './character-details.css'
})
export class CharacterDetails {
  @Input() character!: Character;
}