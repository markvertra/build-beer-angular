import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service.service';

@Component({
  selector: 'app-payment-management-page',
  templateUrl: './payment-management-page.component.html',
  styleUrls: ['./payment-management-page.component.css']
})
export class PaymentManagementPageComponent implements OnInit {
  status: string;
  order: any;
  basket: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.status = 'basket';
    this.basket = this.orderService.basket;
  }

  handleStatusChange(status) {
    this.status = status;
  }

  handleOrderConfirm(order) {
    this.order = order;
  }

}
