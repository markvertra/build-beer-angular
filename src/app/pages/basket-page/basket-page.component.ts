import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../services/order-service.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  basket: any;
  checkoutBasket: any;
  beerForm: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.basket = this.orderService.basket;
    this.checkoutBasket = this.orderService.checkoutBasket;
  }

  handleBeerOrder(beerForm) {
    this.beerForm = beerForm;
    this.checkoutBasket.push(this.beerForm);
  }

  handleCheckoutMove() {
  }
}
