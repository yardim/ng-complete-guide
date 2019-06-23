import { Component } from '@angular/core';
import { Page } from './shared/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private currentPage = Page.recipes;

  onPageChanged(page: Page): void {
    console.log(page);
    this.currentPage = page;
  }

  isShoppingList() {
    return this.currentPage === Page.shoppingList;
  }

  isRecipes() {
    return this.currentPage === Page.recipes;
  }
}
