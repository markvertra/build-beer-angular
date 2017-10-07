import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../../services/beer-service.service';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-beer-display-frame',
  templateUrl: './beer-display-frame.component.html',
  styleUrls: ['./beer-display-frame.component.css']
})
export class BeerDisplayFrameComponent implements OnInit {
  beer;
  color;
  user;

  constructor(private route: ActivatedRoute,
              private beerService: BeerService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBeer(params['id']);
    });
    this.sessionService.isLoggedIn()
    .subscribe(
      (user) => { this.setUser(user); }
    );
  }

  setUser(user: any | null) {
    this.user = user;
  }

  getBeer (id) {
    this.beerService.getBeer(id).subscribe((res) => this.beer = res);
  }

}
