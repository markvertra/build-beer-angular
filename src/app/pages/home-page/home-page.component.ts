import { Component, OnInit } from '@angular/core';

import { BeerService } from '../../services/beer-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  beers;

  constructor(private beer: BeerService) { }

  ngOnInit() {
    this.beer.getBeers().subscribe((res) => this.beers = res);
  }

}
