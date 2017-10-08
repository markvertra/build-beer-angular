import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirm-order-page',
  templateUrl: './confirm-order-page.component.html',
  styleUrls: ['./confirm-order-page.component.css']
})
export class ConfirmOrderPageComponent implements OnInit {
  colors = {'Stout': '#32312c',
  'Porter': '#4f3b28',
  'Red Ale': '#9c4f31',
  'Wheat Beer': '#ff9d17',
  'Pilsner': '#ffef00',
  'Pale Ale': '#ffa712',
  'IPA': '#e37b4c'
};
  @Input() checkoutBasket;
  @Output() onStatusChange = new EventEmitter<String>();
  @Output() onOrderConfirm = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  handleStatusChange() {
    this.onStatusChange.emit('payment');
  }

  handleOrderConfirm(order) {
    this.onOrderConfirm.emit(order);
  }
}
