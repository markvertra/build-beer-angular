import { Component, OnInit } from '@angular/core';
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

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  handleUserLogin(form) {
    this.user = { username: form.value.username,
                   password: form.value.password };
    this.error = null;
    this.session.login(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
      );
  }
}
