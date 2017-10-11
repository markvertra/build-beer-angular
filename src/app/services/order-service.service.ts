import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class OrderService {
  basket = [];
  checkoutBasket= [];
  deliveryDetails = {};

  BASE_URL = environment.API_URL;
  constructor(private http: Http) { }

  postOrder(id: string, order: Object) {
    return this.http.post(`${this.BASE_URL}/api/order/userorder/${id}`, order)
    .map((res) => res.json());
  }

  zapOrder(order: Object) {
    return this.http.post(`https://hooks.zapier.com/hooks/catch/2601108/i6jk61/`, order)
    .map((res) => res.json());
  }

  getOrders() {
    return this.http.get(`${this.BASE_URL}/api/order`)
    .map((res) => res.json());
  }

  getOrdersByUser(id: string) {
    return this.http.get(`${this.BASE_URL}/api/order/user/${id}`)
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
