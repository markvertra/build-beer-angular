import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerService } from '../../services/beer-service.service';
import { SessionService } from '../../services/session-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  beers;
  user;

  constructor(private beer: BeerService,
              private router: Router,
              private session: SessionService) { }


  ngOnInit() {
    this.beer.getPublicBeers().subscribe((res) => this.beers = res);
    this.session.isLoggedIn()
    .subscribe(
      (user) => { this.setUser(user); }
    );
  }

  setUser(user: any | null) {
    this.user = user;
  }

  handleBeerClick(id: String) {
    this.router.navigateByUrl('/beer/' + id);
  }

}
