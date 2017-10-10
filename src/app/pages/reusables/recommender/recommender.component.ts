import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service.service';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {
  recommendedBeers: any;
  orderedBeers = [];
  beerList;
  user: any;

  constructor(private orderService: OrderService,
              private sessionService: SessionService) { }

  ngOnInit() {
      this.sessionService.isLoggedIn().subscribe(
        (user) => this.getOrderedBeers(user.id));
  }

  getOrderedBeers(id) {
    this.orderService.getOrdersByUser(id).subscribe(res => this.buildBeerList(res));
  }

  buildBeerList(array) {
    array.forEach((item) => {
      this.orderedBeers.push(item.beersOrdered.map((beer) => beer.id ));
    });
    const flatten = (arr) => arr.reduce((flat, next) => flat.concat(next), []);
    this.beerList = flatten(this.orderedBeers);
    this.orderedBeers = this.beerList;
  }

  arrayFlattener(array) {
    return array.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? this.arrayFlattener(toFlatten) : toFlatten);
    }, []);
  }

}
