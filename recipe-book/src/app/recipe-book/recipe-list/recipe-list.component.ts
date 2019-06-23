import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'This is a simply test 1',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn'
    ),
    new Recipe(
      'Test recipe 2',
      'This is a simply test 2',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn'
    ),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }
}
