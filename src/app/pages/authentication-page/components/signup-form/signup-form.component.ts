import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../../../services/session-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers: [ SessionService ]
})
export class SignupFormComponent implements OnInit {
  user: any;
  error: String;
  popLogIn: boolean;
  username = '';
  password = '';
  @Output() onPopLogIn = new EventEmitter<boolean>();

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  handlePopLogIn() {
    this.popLogIn = !this.popLogIn;
    this.onPopLogIn.emit(this.popLogIn);
  }

  handleUserSignup(form) {
    if (this.username === '' || this.password === '') {
      this.error = 'Please fill in all form fields';
    } else {
      this.user = { username: form.value.username,
                    password: form.value.password };
      this.error = null;
      this.session.signup(this.user).subscribe(
        (user) => this.userBuilder(user),
        (err) => this.errorHandler(err)
      );
    }
  }

  userBuilder(user) {
    this.user = user;
    if (user) {
      window.location.reload();
    }
  }

  errorHandler(err) {
    const parseErr = JSON.stringify(err);
    if (parseErr.indexOf('Unprocessable') !== -1) {
       this.error = 'This username already exists';
     }
  }
}
