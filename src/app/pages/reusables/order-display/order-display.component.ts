import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service.service';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {
  checkoutBasket: any;
  total: Number;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.checkoutBasket = this.orderService.checkoutBasket;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.orderService.checkoutBasket.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  }

}
