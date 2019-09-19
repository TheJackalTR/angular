import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public firstName = 'John';
  public lastName: string;
  public email: string;
  public street: string;
  public city: string;
  public country: string;
  public gender: string;

  /**
   * onSubmit
   */
  public onSubmit(data) {
    console.log(this.firstName);
  }
}
