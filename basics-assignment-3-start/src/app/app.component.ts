import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDetailsDisplayed = false;
  clicks = [];

  onDisplayDetails() {
    this.clicks.push('Click');
    this.isDetailsDisplayed = !this.isDetailsDisplayed;
  }
}
