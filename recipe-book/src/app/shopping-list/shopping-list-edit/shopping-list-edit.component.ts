import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnInit() {}

  onAddClick(event: MouseEvent) {
    // event.preventDefault();
    this.addIngredient.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      +this.amountInput.nativeElement.value
    ));
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
