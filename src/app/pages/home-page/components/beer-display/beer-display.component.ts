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
  searchType: string;
  filteredBeers: any;

  constructor(private beer: BeerService,
    private router: Router,
    private session: SessionService) { }

  ngOnInit() {
    this.beer.getPublicBeers().subscribe((res) => (this.filteredBeers = res, this.beers = res));
  }

  handleSearchChange() {
    this.filteredBeers = this.runSearch(this.searchTerm, this.searchType);
  }

  handleSearchTypeChange() {
    this.filteredBeers = this.runSearch(this.searchTerm, this.searchType);
  }

  runSearch(searchTerm, searchType) {
    if (!searchType) { searchType = 'searchable'; }
    if (!searchTerm) { searchTerm = ''; }
    console.log(this.filteredBeers[3]['searchable']);
    return this.beers.filter((beer) => {
      return beer[searchType].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
  }

  handleBeerClick(id: String) {
    this.router.navigateByUrl('/beer/' + id);
  }

}
