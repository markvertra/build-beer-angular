import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-setter',
  templateUrl: './quantity-setter.component.html',
  styleUrls: ['./quantity-setter.component.css']
})
export class QuantitySetterComponent implements OnInit {
  quantity = 20;
  bottleSize = '330';
  price = 50;
  @Input() beerID;
  @Input() beerName;
  @Output() onBeerOrder = new EventEmitter<Object>();
  beerOrder = {id: '', name: '', quantity: 0, bottleSize: '0', price: 0};

  constructor() { }

  ngOnInit() {
    this.beerOrder.id = this.beerID;
    this.beerOrder.name = this.beerName;
    this.beerOrder.quantity = this.quantity;
    this.beerOrder.bottleSize = this.bottleSize;
    this.handleQuantityChange();
  }

  handleIncreaseQuantity() {
    if (this.quantity < 90) {
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
    this.price = this.quantity * 2.5;
    this.beerOrder.price = this.quantity * 2.5;
    this.onBeerOrder.emit(this.beerOrder);
  }

  handleBottleSizeChange() {
    this.beerOrder.bottleSize = this.bottleSize;
    this.onBeerOrder.emit(this.beerOrder);
  }
}
