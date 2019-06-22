import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  @Output() generateNumber = new EventEmitter<number>();
  private currentNumber = 0;
  private timer: NodeJS.Timeout;

  constructor() { }

  ngOnInit() { }

  onStartGame(): void {
    this.timer = setInterval(() => {
      this.generateNumber.emit(++this.currentNumber);
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.timer);
    this.currentNumber = 0;
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
