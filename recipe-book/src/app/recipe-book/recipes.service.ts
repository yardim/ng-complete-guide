import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes = [
    new Recipe(
      'Test recipe 1',
      'This is a simply test 1',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Potato', 3),
      ]
    ),
    new Recipe(
      'Test recipe 2',
      'This is a simply test 2',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cucumber', 1),
      ]
    ),
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(recipeNumber: number): Recipe {
    return this.recipes[recipeNumber];
  }
}
