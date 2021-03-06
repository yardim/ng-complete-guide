import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from '../shared/shared.module';
import { EmptyDetailsComponent } from './empty-details/empty-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    EmptyDetailsComponent,
    EditRecipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipeBookModule { }
