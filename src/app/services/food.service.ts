import { Food } from '../shared/models/Food';
import { Injectable } from '@angular/core';
import { sample_foods } from './../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods
  }

  /**
   * Barre de recherche
   * @param searchTerm
   */
  getAllFoodsBySearchTerm(searchTerm:string){
    //toLowerCase => retourn tous en minuscule
    //includes => envois True si un tableau à une valeur et false à l'inverse
    return this.getAll().filter(food => food.nom.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
