import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../../../services/session-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [ SessionService ]
})
export class LoginFormComponent implements OnInit {
  user: any;
  error: String;
  signupPop: boolean;
  username = '';
  password = '';
  @Output() onLoginBoxPop = new EventEmitter<string>();

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  handleUserLogin(form) {
    if (this.username === '' || this.password === '') {
      this.error = 'Please fill in all form fields';
    } else {
    this.user = { username: form.value.username,
                   password: form.value.password };
    this.error = null;
    this.session.login(this.user).subscribe(
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
    if (parseErr.indexOf('404') !== -1) {
       this.error = 'Login credentials incorrect';
     }
    this.onLoginBoxPop.emit();
  }

  handlePopSignUp() {
    this.signupPop = !this.signupPop;
  }

  handlePopLogIn() {
    this.signupPop = !this.signupPop;
  }
}
