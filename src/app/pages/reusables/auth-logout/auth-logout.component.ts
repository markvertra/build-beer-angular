import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.css']
})
export class AuthLogoutComponent {

  constructor(private auth: SessionService) { }

  logout() {
    this.auth.logout().subscribe();
  }

}
