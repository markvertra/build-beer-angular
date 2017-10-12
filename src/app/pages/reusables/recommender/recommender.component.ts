import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service.service';
import { SessionService } from '../../../services/session-service.service';
import { BeerService } from '../../../services/beer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {
  recommendedBeers = [];
  orderedBeers =  [];
  beerList;
  user: any;
  favouriteStyle;
  favouriteFlavour;
  stylePoints = {'Red Ale': 0,
                 'IPA': 0,
                 'Pale Ale': 0,
                 'Porter': 0,
                 'Stout': 0,
                 'Wheat Beer': 0,
                 'Pilsner': 0};
  flavourPoints = {'Smoky': 0,
                   'Citrus': 0,
                   'Grape': 0,
                   'Apricot': 0,
                   'Orange': 0,
                   'Coriander': 0,
                   'Vanilla': 0,
                   'Blueberry': 0,
                   'Strawberry': 0,
                   'Chili': 0,
                   'Chocolate': 0,
                   'Coffee': 0,
                   'Caramel': 0 };

  constructor(private orderService: OrderService,
              private sessionService: SessionService,
              private beerService: BeerService,
              private router: Router) { }

  ngOnInit() {
      this.sessionService.isLoggedIn().subscribe(
        (user) => this.getOrderedBeers(user.id));
  }

  getOrderedBeers(id: string) {
    this.orderService.getOrdersByUser(id).subscribe(res => this.buildBeerList(res));
  }

  buildBeerList(array: Array<any>) {
    array.forEach((item) => {
      this.orderedBeers.push(item.beersOrdered.map((beer) => beer.id ));
    });
    const beerList = this.flatten(this.orderedBeers);
    this.orderedBeers = beerList;
    this.buildStyleList(this.orderedBeers);
    this.buildFlavourList(this.orderedBeers);
  }

  buildStyleList(beerArray: Array<any>) {
    beerArray.forEach((item) => {
      this.beerService.getBeer(item).subscribe((res) => this.favouriteStyle =
                                                        this.defineFavouriteStyles(this.addToStyleObject(res.beerDetails.style)));
    });
  }

  buildFlavourList(beerArray: Array<any>) {
    beerArray.forEach((item) => {
      this.beerService.getBeer(item).subscribe((res) => this.favouriteFlavour = this.addToFlavourObject(res.beerDetails.extraFlavours));
    });
  }

  addToStyleObject(style: string): object {
    this.stylePoints[style] = this.stylePoints[style] + 1;
    return this.stylePoints;
  }

  addToFlavourObject(flavour: string) {
    this.flavourPoints[flavour] = this.flavourPoints[flavour] + 1;
  }

  flatten(arr): Array<any> {
    return arr.reduce((flat, next) => flat.concat(next), []);
  }

  defineFavouriteStyles(styleObject: object) {
    let maxItem = '';
    let maxCount = 0;
    Object.keys(styleObject).forEach((item) => {
      if (styleObject[item] > maxCount) {
        maxCount = styleObject[item];
        maxItem = item;
      }
    });
    this.beerService.getBeerByStyle(maxItem).subscribe(res => this.recommendedBeers = res);
    return maxItem;
  }

  defineFavouriteFlavours(styleObject: object) {
    let maxItem = '';
    let maxCount = 0;
    Object.keys(styleObject).forEach((item) => {
      if (styleObject[item] > maxCount) {
        maxCount = styleObject[item];
        maxItem = styleObject[item];
      }
    });
    return maxItem;
  }

  handleBeerClick(id: string) {
    this.router.navigateByUrl('/beer/' + id);
  }
}
