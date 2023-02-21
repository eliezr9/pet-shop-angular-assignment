import { Component, Input } from '@angular/core';
import { Pet } from '../interfaces/pet-intervace';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent {

  @Input() pet?: Pet;

}
