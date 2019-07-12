import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    name: '',
    mail: '',
    question: '',
    answer: '',
    gender: '',
  };
  isSubmitted = false;
  @ViewChild('f', { static: true }) form: NgForm;

  ngOnInit() {
    console.log(this.form);
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.form.setValue({
    //   answer: '',
    //   gender: 'male',
    //   secret: 'pet',
    //   userData: {
    //     email: '',
    //     username: suggestedName
    //   }
    // });

    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    this.isSubmitted = true;

    this.user.name = form.value.userData.username;
    this.user.mail = form.value.userData.email;
    this.user.question = form.value.secret;
    this.user.answer = form.value.answer;
    this.user.gender = form.value.gender;

    this.form.reset();
  }
}
