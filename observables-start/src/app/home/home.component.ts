import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, Observable, Observer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe(console.log);

    const observable = Observable.create((observer: Observer<number>) => {
      let count = 0;

      setInterval(() => {
        if (count > 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Oopsy! You get to limit of 3!'));
        }

        observer.next(count);
        count += 1;
      }, 1000);
    });

    this.subscription = observable
      .pipe(
        filter(data => data > 0),
        map(data => 'Round: ' + data)
      )
      .subscribe(
        console.log,
        (error: Error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
