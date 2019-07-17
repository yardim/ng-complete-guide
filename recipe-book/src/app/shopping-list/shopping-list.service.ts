import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 5),
  ];

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
