import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session-service.service';
import { BeerService } from '../../services/beer-service.service';
import { OrderService } from '../../services/order-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
  user: any;
  publicBeers: Array<Object>;
  privateBeers: Array<Object>;
  notAdded = true;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService: SessionService,
              private beerService: BeerService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.getUser(params['id']),
    this.getPublicBeerByUser(params['id']);
    this.getPrivateBeerByUser(params['id']);
    });
  }

  getUser(id) {
    this.sessionService.getUser(id).subscribe((res) => this.user = res);
  }

  getPublicBeerByUser(id) {
    this.beerService.getPublicUserBeers(id).subscribe((res) => this.publicBeers = res);
  }

  getPrivateBeerByUser(id) {
    this.beerService.getPrivateUserBeers(id).subscribe((res) => this.privateBeers = res);
  }

  handleBeerClick(id: String, creatorId) {
    if (creatorId === this.user._id) {
      this.router.navigateByUrl('/beer/' + id + '/edit');
    }
  }

  handleAddToBasket(beer) {
    let beerPush = true;
    this.orderService.basket.forEach((item) => {
      if (item._id === beer._id) {
        beerPush = false;
      }
    });
    if (beerPush) {
      this.orderService.addItemToBasket(beer);
      this.notAdded = false;
    }
  }
}

