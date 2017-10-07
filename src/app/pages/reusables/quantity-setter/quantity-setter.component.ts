import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-setter',
  templateUrl: './quantity-setter.component.html',
  styleUrls: ['./quantity-setter.component.css']
})
export class QuantitySetterComponent implements OnInit {
  quantity = 20;
  bottleSize = 330;
  @Input() beerID;
  @Output() onBeerOrder = new EventEmitter<Object>();
  beerOrder = {id: '', quantity: 0, bottleSize: 0};

  constructor() { }

  ngOnInit() {
    this.beerOrder.id = this.beerID;
    this.beerOrder.quantity = this.quantity;
    this.beerOrder.bottleSize = this.bottleSize;
  }

  handleIncreaseQuantity() {
    if (this.quantity < 100) {
    this.quantity += 10;
    this.handleQuantityChange();
    }
  }

  handleDecreaseQuantity() {
    if (this.quantity > 20) {
      this.quantity -= 10;
      }
    this.handleQuantityChange();
  }

  handleQuantityChange() {
    this.beerOrder.quantity = this.quantity;
    this.onBeerOrder.emit(this.beerOrder);
  }

  handleBottleSizeChange() {
    this.beerOrder.bottleSize = this.bottleSize;
    this.onBeerOrder.emit(this.beerOrder);
  }
}
