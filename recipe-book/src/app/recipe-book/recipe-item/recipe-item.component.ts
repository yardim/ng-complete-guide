import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelect = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() { }

  onSelectRecipe(event: MouseEvent): void {
    event.preventDefault();
    this.recipeSelect.emit(this.recipe);
  }
}
