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
  beers: any;
  user: any;
  searchTerm: string;
  searchType;
  filteredBeers: any;

  constructor(private beer: BeerService,
    private router: Router,
    private session: SessionService) { }

  ngOnInit() {
    this.beer.getPublicBeers().subscribe((res) => { this.filteredBeers = this.sortBeers(res), this.beers = this.sortBeers(res);  });
  }

  handleSearchChange() {
    this.filteredBeers = this.runSearch(this.searchTerm, this.searchType);
    this.sortBeers(this.filteredBeers);
  }

  handleSearchTypeChange() {
    this.filteredBeers = this.runSearch(this.searchTerm, this.searchType);
    this.sortBeers(this.filteredBeers);
  }

  runSearch(searchTerm, searchType) {
    if (!searchTerm) { searchTerm = ''; }
    if (!searchType) {
      this.searchType = 'searchable';
      return this.beers.filter((beer) => {
        return beer[this.searchType].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
    } else if (searchType === 'name') {
      return this.beers.filter((beer) => {
        return beer[searchType].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
    } else if (searchType === 'style') {
      return this.beers.filter((beer) => {
        return beer.beerDetails[searchType].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
    } else if (searchType === 'extraFlavours') {
      return this.beers.filter((beer) => {
        return beer.beerDetails[searchType][0].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
    } else if (searchType === 'slogan') {
      return this.beers.filter((beer) => {
        return beer.label[searchType].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
    }
  }

  handleBeerClick(id: String) {
    this.router.navigateByUrl('/beer/' + id);
  }

  calculateReviewScore(beer) {
    const scores = Object.values(beer.reviews);
    return scores.reduce((prev, curr) => (prev + Number(curr)), 0) / scores.length;
  }

  sortBeers(beers) {
    beers.sort((a, b) => {
      const reviewsA = this.calculateReviewScore(a) || 0;
      const reviewsB = this.calculateReviewScore(b) || 0;
      return reviewsB - reviewsA;
    });
    return beers;
  }

}
