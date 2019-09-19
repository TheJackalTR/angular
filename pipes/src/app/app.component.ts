import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promise: Promise<any>;
  title = 'ArYeN';
  myDate: Date = new Date();
  myMoney = 1200;
  myObj = {
           name: 'john',
           salary: 9000
          };
  myNumber = 1000.12345;
  stock = 3.5666;
  numbers: number[] = [10, 20, 30, 40, 50];

  constructor() {
    this.promise = this.getPromise();
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise Response'), 2000);
    });
  }
}
