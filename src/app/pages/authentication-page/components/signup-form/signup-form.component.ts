import { Component, OnInit } from '@angular/core';
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

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  handleUserSignup(form) {
    const userLogging = { username: form.value.username,
      password: form.value.password };
    this.session.login(userLogging)
      .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err)
    );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }
}
