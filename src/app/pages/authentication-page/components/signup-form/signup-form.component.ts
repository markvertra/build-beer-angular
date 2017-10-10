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
  @Output() onPopLogIn = new EventEmitter<boolean>();

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  handlePopLogIn() {
    this.popLogIn = !this.popLogIn;
    this.onPopLogIn.emit(this.popLogIn);
  }

  handleUserSignup(form) {
      this.user = { username: form.value.username,
      password: form.value.password };
      this.error = null;
      this.session.signup(this.user).subscribe(
        (user) => this.userBuilder(user),
        (err) => this.error = err
      );
  }

  userBuilder(user) {
    this.user = user;
    if (user) {
      window.location.reload();
    }
  }
}
