import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.css']
})
export class AuthLogoutComponent {

  constructor(private session: SessionService) { }

  logout() {
    this.session.logout().subscribe();
  }

}
