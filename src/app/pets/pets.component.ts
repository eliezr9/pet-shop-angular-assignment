import { Component, OnInit } from '@angular/core';
import { Pet } from '../interfaces/pet-intervace';
import { PetService } from '../services/pet.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
        .subscribe(pets => this.pets = pets);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.petService.addHero({ name } as Pet)
  //     .subscribe(pet => {
  //       this.pets.push(pet);
  //     });
  // }

}
