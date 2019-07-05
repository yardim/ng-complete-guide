import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { EmptyDetailsComponent } from './recipe-book/empty-details/empty-details.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: EmptyDetailsComponent, pathMatch: 'full' },
      { path: ':recipeNumber', component: RecipeDetailComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
