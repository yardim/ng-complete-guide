import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Chris', 'Anna'];

  get hobbyControls(): FormControl[] {
    return (this.signupForm.get('hobbies') as FormArray)
      .controls as FormControl[];
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbidden.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onAddHobby(): void {
    (this.signupForm.get('hobbies') as FormArray)
      .push(new FormControl(''));
  }

  forbidden(control: FormControl): {[key: string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { forbidden: true };
    }

    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({forbiddenEmail: true});
        }

        resolve(null);
      }, 1500);
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }
}
