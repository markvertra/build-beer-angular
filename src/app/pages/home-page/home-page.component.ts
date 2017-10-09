import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  user: any;
  loginWarning = true;

  constructor(private router: Router,
              private session: SessionService) { }

  setUser(user: any | null) {
    this.user = user;
  }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => { this.setUser(user); }
    );
  }

  buildIfLoggedIn() {
    if (this.user) {
      this.router.navigateByUrl('/create');
    } else {
      this.toggleOverlay();
    }
  }

  toggleOverlay() {
    this.loginWarning = !this.loginWarning;
  }

}
