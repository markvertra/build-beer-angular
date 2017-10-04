import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {

  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http) { }

  getBeers() {
    return this.http.get(`${this.BASE_URL}/api/beer`)
    .map((res) => res.json());
  }

  getBeer(id: string) {
    return this.http.get(`${this.BASE_URL}/api/beer/${id}`)
      .map((res) => res.json());
  }

  postBeer(beer: Object) {
    return this.http.post(`${this.BASE_URL}/api/beer`, beer)
    .map((res) => res.json());
  }
}
