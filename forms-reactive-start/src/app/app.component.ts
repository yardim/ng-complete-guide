import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  get hobbyControls(): FormControl[] {
    return (this.signupForm.get('hobbies') as FormArray)
      .controls as FormControl[];
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onAddHobby(): void {
    (this.signupForm.get('hobbies') as FormArray)
      .push(new FormControl(''));
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }
}
