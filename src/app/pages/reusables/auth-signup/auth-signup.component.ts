import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent {

  user = new User({
    username: '',
    email: '',
    password: ''
  });

  error: string;

  constructor(private auth: SessionService) { }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }
}
