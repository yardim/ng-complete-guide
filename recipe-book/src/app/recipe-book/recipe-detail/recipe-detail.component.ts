import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Data } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((data: Data) => {
        this.recipe = this.recipesService.getRecipe(+data.recipeNumber);
      });
  }

  addToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
