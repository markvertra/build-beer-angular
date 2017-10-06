import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session-service.service';
import { BeerService } from '../../services/beer-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
  user: any;
  beers: Array<Object>;


  constructor(private route: ActivatedRoute,
    private sessionService: SessionService,
    private beerService: BeerService) { }

ngOnInit() {
  this.route.params.subscribe(params => {
  this.getUser(params['id']),
  this.getBeerByUser(params['id']);
  });
}

getUser(id) {
  this.sessionService.getUser(id).subscribe((res) => this.user = res);
  }

getBeerByUser(id) {
  this.beerService.getUserBeers(id).subscribe((res) => this.beers = res);
}


}
