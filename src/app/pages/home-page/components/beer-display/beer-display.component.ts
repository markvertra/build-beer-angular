import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerService } from '../../../../services/beer-service.service';
import { SessionService } from '../../../../services/session-service.service';

@Component({
  selector: 'app-beer-display',
  templateUrl: './beer-display.component.html',
  styleUrls: ['./beer-display.component.css']
})
export class BeerDisplayComponent implements OnInit {
  beers;
  user;
  searcher;

  constructor(private beer: BeerService,
    private router: Router,
    private session: SessionService) { }

  ngOnInit() {
    this.beer.getPublicBeers().subscribe((res) => this.beers = res);
  }

  handleBeerClick(id: String) {
    this.router.navigateByUrl('/beer/' + id);
  }

}
