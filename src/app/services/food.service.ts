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
}
