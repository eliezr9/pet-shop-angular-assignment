import { Component, OnInit } from '@angular/core';
import { Pet } from '../interfaces/pet-intervace';
import { PetService } from '../services/pet.service';


@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  unClickable = true;

  types = ["Dog", "Cat", "Horse", "Other"]
  pet: Pet = { id: 0, name: '', age: 1, type: '', color: true };

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  add(name: string, age: string, type: string, color: string): void {
    name = name.trim();
    if (!name || name.length > 25) { return; }

    let convAge = Number(age);
    if (convAge <= 0 || Number.isNaN(convAge)) { return; }

    type = type.trim();
    if (!type || !this.types.includes(type)) { return; }

    if (color === undefined || color === null) { return; }
    let selectedColor: boolean;
    if (color === "white") { selectedColor = true }
    else { selectedColor = false }

    this.petService.addPet({ name: name, age: convAge, type: type, color: selectedColor } as Pet)
      .subscribe();
  }
}
