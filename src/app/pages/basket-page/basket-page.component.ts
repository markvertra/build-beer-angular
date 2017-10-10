import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../services/order-service.service';
import { SessionService } from '../../services/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  basket: any;
  beerForm: any;
  total = 0;
  user: any;
  @Output() onStatusChange = new EventEmitter<String>();
  @Output() onCheckoutSubmit = new EventEmitter<Array<Object>>();

  constructor(private orderService: OrderService,
              private session: SessionService,
              private router: Router) { }

  setUser(user: any | null) {
    this.user = user;
  }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => this.setUser(user),
      (err) => this.router.navigateByUrl('/')
    );
    this.basket = this.orderService.basket;
    this.calculateTotal();
  }

  handleBeerOrder(beerForm) {
    this.beerForm = beerForm;
    let beerPush = true;
    this.orderService.checkoutBasket.forEach((item) => {
      if (item.id === beerForm.id) {
        beerPush = false;
      }
    });
    if (beerPush) { this.orderService.checkoutBasket.push(beerForm); }
    this.calculateTotal();
  }

  handleCheckoutMove() {
    this.onStatusChange.emit('confirm');
  }

  calculateTotal() {
    this.total = this.orderService.checkoutBasket.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  }
}
