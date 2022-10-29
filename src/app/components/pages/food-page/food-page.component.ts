import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(private _activatedRoute: ActivatedRoute,
              private _foodService: FoodService) {

    _activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = _foodService.getFoodById(params.id);
    })
              }

  ngOnInit(): void {
  }

}
