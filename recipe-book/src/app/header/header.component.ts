import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Page } from '../shared/pages.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() pageChanged = new EventEmitter<Page>();

  constructor() { }

  ngOnInit() {
  }

  onOpenRecipes(event: MouseEvent): void {
    event.preventDefault();
    this.pageChanged.emit(Page.recipes);
  }

  onOpenShoppingList(): void {
    event.preventDefault();
    this.pageChanged.emit(Page.shoppingList);
  }
}
