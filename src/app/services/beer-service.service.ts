import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {

  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http) { }

  postBeer(beer: Object) {
    return this.http.post(`${this.BASE_URL}/api/beer`, beer)
    .map((res) => res.json());
  }
}
