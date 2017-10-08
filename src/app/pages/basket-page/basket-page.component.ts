import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../services/order-service.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  basket: any;
  beerForm: any;
  total = 0;
  @Output() onStatusChange = new EventEmitter<String>();
  @Output() onCheckoutSubmit = new EventEmitter<Array<Object>>();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
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
