import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['stable', 'critical', 'finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, this.forbiddenName]),
      email: new FormControl('', [Validators.required, Validators.email], this.forbiddenMail),
      projectStatus: new FormControl(this.projectStatuses[0]),
    });
  }

  forbiddenName(control: FormControl) {
    if (control.value === 'Test') {
      return { forbidden: true };
    }

    return null;
  }

  forbiddenMail(control: FormControl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ forbiddenMail: true });
        }

        resolve(null);
      }, 2000);
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
