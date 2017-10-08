import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
  basket = [];
  checkoutBasket= [];

  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http) { }

  postOrder(order: Object) {
    return this.http.post(`${this.BASE_URL}/api/order`, order)
    .map((res) => res.json());
  }

  getOrders() {
    return this.http.get(`${this.BASE_URL}/api/order`)
    .map((res) => res.json());
  }

  getOrder(id: string) {
    return this.http.get(`${this.BASE_URL}/api/order/${id}`)
      .map((res) => res.json());
  }

  addItemToBasket(item: Object) {
    this.basket.push(item);
  }

  addItemToCheckoutBasket(item: Object) {
    this.basket.push(item);
  }
}
