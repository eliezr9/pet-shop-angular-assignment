import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pet } from '../interfaces/pet-intervace';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pets = [
      { id: 1, name: 'Nugget', age: 1, type: "Dog", color: true },
      { id: 2, name: 'Tzahi', age: 2, type: "Cat", color: false },
      { id: 3, name: 'Fifa', age: 12, type: "Horse", color: true },
      { id: 4, name: 'Bruno', age: 7, type: "Other", color: false },
    ];
    return { pets };
  }

  genId(pets: Pet[]): number {
    return pets.length > 0 ? Math.max(...pets.map(pet => pet.id)) + 1 : 1;
  }
}