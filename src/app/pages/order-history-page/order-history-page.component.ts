import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service.service';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.component.html',
  styleUrls: ['./order-history-page.component.css']
})
export class OrderHistoryPageComponent implements OnInit {
  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(res => {
      this.orders = res;
    });
  }
}
