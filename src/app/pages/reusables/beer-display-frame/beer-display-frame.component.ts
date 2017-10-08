import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../../services/beer-service.service';
import { SessionService } from '../../../services/session-service.service';
import { OrderService } from '../../../services/order-service.service';

@Component({
  selector: 'app-beer-display-frame',
  templateUrl: './beer-display-frame.component.html',
  styleUrls: ['./beer-display-frame.component.css']
})
export class BeerDisplayFrameComponent implements OnInit {
  beer;
  color;
  user;

  constructor(private route: ActivatedRoute,
              private beerService: BeerService,
              private sessionService: SessionService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBeer(params['id']);
    });
    this.sessionService.isLoggedIn()
    .subscribe(
      (user) => { this.setUser(user); }
    );
  }

  setUser(user: any | null) {
    this.user = user;
  }

  getBeer (id) {
    this.beerService.getBeer(id).subscribe((res) => this.beer = res);
  }

  handleAddToBasket() {
    let beerPush = true;
    this.orderService.basket.forEach((item) => {
      if (item._id === this.beer._id) {
        beerPush = false;
      }
    });
    if (beerPush) { this.orderService.addItemToBasket(this.beer); }
    }
}

