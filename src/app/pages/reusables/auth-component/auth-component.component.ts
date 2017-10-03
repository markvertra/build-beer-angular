import { Component, OnInit } from '@angular/core';
import { Subject} from 'rxjs/Subject';

import { User } from '../../../models/user';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = true;
  anon: boolean;
  user: User;
  // tslint:disable-next-line:no-inferrable-types
  formsVisible: boolean = false;

  constructor(private authService: SessionService) { }

  private setUser(user: User | null) {
    this.loading = false;
    this.user = user;
    this.anon = !user;
  }

  ngOnInit() {
    this.loading = false;
    this.authService.userChange$.subscribe((user) => {
      this.setUser(user);
    });
  }

  toggleForms() {
    this.formsVisible = !this.formsVisible;
  }

}
