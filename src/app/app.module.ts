import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-list/grocery-item/grocery-item.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GroceryEditComponent } from './grocery-list/grocery-edit/grocery-edit.component';
import { MealsComponent } from './meals/meals.component';
import { MealDetailsComponent } from './meals/meal-details/meal-details.component';
import { MealItemComponent } from './meals/meal-list/meal-item/meal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryItemComponent,
    MealListComponent,
    NavBarComponent,
    GroceryEditComponent,
    MealsComponent,
    MealItemComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
