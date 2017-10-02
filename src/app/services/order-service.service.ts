import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http) { }

  postOrder(order: Object) {
    return this.http.post(`${this.BASE_URL}/api/order`, order)
    .map((res) => res.json());
  }
}
