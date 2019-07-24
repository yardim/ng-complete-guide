import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();

    this.recipesService.recipesUpdated
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  onNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }
}
