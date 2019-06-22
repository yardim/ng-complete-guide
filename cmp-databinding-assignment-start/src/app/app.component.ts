import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  onGeneratedNumber(number: number): void {
    this.numbers.push(number);
  }

  isEven(number: number): boolean {
    return number % 2 === 0;
  }
}
