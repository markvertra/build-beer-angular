import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session-service.service';
import { OrderService } from './services/order-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionService]
})
export class AppComponent implements OnInit {
  basket = [];
  user: any;
  error: string;
  loginPop: boolean;
  responsiveDisplay: boolean;
  loginWarning = true;

  constructor(private session: SessionService,
              private router: Router,
              private orderService: OrderService) { }

    setUser(user: any | null) {
      this.user = user;
    }

    ngOnInit() {
      this.basket = this.orderService.basket;
      this.session.isLoggedIn()
      .subscribe(
        (user) => { this.setUser(user); }
      );
    }

    popLogIn() {
      this.loginPop = !this.loginPop;
      this.toggleOverlay();
    }

    displayResponsiveMenu() {
      this.responsiveDisplay = !this.responsiveDisplay;
    }

    handleLoginBoxPop() {
      this.loginPop = true;
    }

    logOut() {
      this.session.logout()
      .subscribe(
        () => this.successCb(null),
        (err) => this.errorCb(err)
      );
      this.router.navigateByUrl('');
      window.location.reload();
    }

    errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
      this.user = user;
      this.error = null;
    }

    toggleOverlay() {
      this.loginWarning = !this.loginWarning;
    }
}
