import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-order-progress-bar',
  templateUrl: './order-progress-bar.component.html',
  styleUrls: ['./order-progress-bar.component.css']
})
export class OrderProgressBarComponent implements OnChanges {
  @Input () status: string;
  basket;
  confirm;
  payment;
  results;

  constructor() { }

  ngOnChanges() {
    this.progressChanger();
  }

  progressChanger() {
    if (this.status === 'basket') {
      this.basket = true;
      this.confirm = false;
      this.payment = false;
      this.results = false;
    } else if (this.status === 'confirm') {
      this.basket = false;
      this.confirm = true;
      this.payment = false;
      this.results = false;
    } else if (this.status === 'payment') {
      this.basket = false;
      this.confirm = false;
      this.payment = true;
      this.results = false;
    } else {
      this.basket = false;
      this.confirm = false;
      this.payment = false;
      this.results = true;
    }
  }

}
