import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personForm: FormGroup;
  public countries: string[];

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.countries = ['USA', 'India', 'Canada', 'Turkey'];
    this.personForm = new FormGroup({
      firstName: new FormControl('Aryen',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
      }),
      gender: new FormControl(),
    });
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    console.log(this.personForm.valid);

  }
}
