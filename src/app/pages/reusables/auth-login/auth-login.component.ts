import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {

  user = new User({
    username: '',
    password: ''
  });

  error: string;

  constructor(private auth: SessionService) { }

  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }
}
