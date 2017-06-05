import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [
    new Meal('Delicious Test Meal', 'This is a delicious test meal.', 'http://www.seriouseats.com/images/2012/07/20120730216565-chilaquiles-pumpkin-seed-salsa-verde-1.jpeg'),
    new Meal('Delicious Test Meal', 'This is a delicious test meal.', 'http://www.seriouseats.com/images/2012/07/20120730216565-chilaquiles-pumpkin-seed-salsa-verde-1.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
