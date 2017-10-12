import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../services/order-service.service';

@Component({
  selector: 'app-payment-options-page',
  templateUrl: './payment-options-page.component.html',
  styleUrls: ['./payment-options-page.component.css']
})
export class PaymentOptionsPageComponent implements OnInit {
  @Input() order;
  @Output() onBasketSubmit = new EventEmitter<string>();
  @Output() onStatusChange = new EventEmitter<string>();
  deliveryDetails: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.deliveryDetails = this.orderService.deliveryDetails;
  }

  handleStatusChange() {
    this.onStatusChange.emit('results');
    this.onBasketSubmit.emit();
    this.orderService.checkoutBasket = [];
    this.orderService.basket = [];
  }
}
