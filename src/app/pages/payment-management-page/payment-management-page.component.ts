import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-management-page',
  templateUrl: './payment-management-page.component.html',
  styleUrls: ['./payment-management-page.component.css']
})
export class PaymentManagementPageComponent implements OnInit {
  status: String;
  order: any;

  constructor() { }

  ngOnInit() {
    this.status = 'basket';
  }

  handleStatusChange(status) {
    this.status = status;
  }

  handleOrderConfirm(order) {
    this.order = order;
  }

}
