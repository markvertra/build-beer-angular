import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user: any;


  constructor(private route: ActivatedRoute,
    private sessionService: SessionService) { }

ngOnInit() {
  this.route.params.subscribe(params => {
  this.getUser(params['id']);
  });
}

getUser(id) {
  this.sessionService.getUser(id).subscribe((res) => this.user = res);
  }
}
