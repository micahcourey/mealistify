import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 7),
    new Ingredient('Onions', 5)
  ];
  constructor() { }

  ngOnInit() {
  }

}
