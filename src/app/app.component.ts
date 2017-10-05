import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionService]
})
export class AppComponent implements OnInit {
  user: any;
  error: string;
  loginPop: boolean;

  constructor(private session: SessionService) { }

    ngOnInit() {
      this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
    }

    popLogIn() {
      this.loginPop = !this.loginPop;
    }

    logOut() {
      this.session.logout()
      .subscribe(
        () => this.successCb(null),
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
