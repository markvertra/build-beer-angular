import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-creation-process',
  templateUrl: './beer-creation-process.component.html',
  styleUrls: ['./beer-creation-process.component.css']
})
export class BeerCreationProcessComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  creatingBeer: boolean = false;
  beerCreated: object = {};

  constructor() { }

  ngOnInit() {
  }

  handleBeerCreated(beer) {
    this.creatingBeer = true;
    this.beerCreated = beer;
  }

  handleBeerOrdered() {
    this.creatingBeer = false;
    this.beerCreated = {};
  }
}
