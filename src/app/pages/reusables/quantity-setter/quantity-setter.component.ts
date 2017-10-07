import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-setter',
  templateUrl: './quantity-setter.component.html',
  styleUrls: ['./quantity-setter.component.css']
})
export class QuantitySetterComponent implements OnInit {
  quantity = 20;

  constructor() { }

  ngOnInit() {
  }

  handleIncreaseQuantity() {
    if (this.quantity < 100) {
    this.quantity += 10;
    }
  }

  handleDecreaseQuantity() {
    if (this.quantity > 20) {
      this.quantity -= 10;
      }
  }
}
