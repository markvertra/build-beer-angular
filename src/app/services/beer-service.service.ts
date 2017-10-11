import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class BeerService {
  recommended: string;

  BASE_URL = environment.API_URL;
  constructor(private http: Http) { }

  getBeers() {
    return this.http.get(`${this.BASE_URL}/api/beer`)
    .map((res) => res.json());
  }

  getBeersArray(array) {
    return this.http.get(`${this.BASE_URL}/api/beer/array`, array)
    .map((res) => res.json());
  }

  getBeer(id: string) {
    return this.http.get(`${this.BASE_URL}/api/beer/${id}`)
      .map((res) => res.json());
  }

  getBeerByStyle(style: string) {
    return this.http.get(`${this.BASE_URL}/api/beer/style/${style}`)
      .map((res => res.json()));
  }

  getBeerCreatorName(id: string ) {
    return this.http.get(`${this.BASE_URL}/api/beer/creator/${id}`)
      .map((res) => res.json());
  }

  getPublicBeers() {
    return this.http.get(`${this.BASE_URL}/api/beer/public`)
    .map((res) => res.json());
  }

  getPrivateBeers() {
    return this.http.get(`${this.BASE_URL}/api/beer/public`)
    .map((res) => res.json());
  }

  getUserBeers(id: string) {
    return this.http.get(`${this.BASE_URL}/api/beer/byuser/${id}`)
      .map((res) => res.json());
  }

  getPublicUserBeers(id: string) {
    return this.http.get(`${this.BASE_URL}/api/beer/byuser/${id}/public`)
      .map((res) => res.json());
  }

  getPrivateUserBeers(id: string) {
    return this.http.get(`${this.BASE_URL}/api/beer/byuser/${id}/private`)
      .map((res) => res.json());
  }

  postBeer(beer: Object) {
    return this.http.post(`${this.BASE_URL}/api/beer`, beer)
    .map((res) => res.json());
  }

  putBeer(id: String, beer: Object) {
    return this.http.post(`${this.BASE_URL}/api/beer/${id}`, beer)
    .map((res) => res.json());
  }

  addReview(id: String, score: Object) {
    return this.http.post(`${this.BASE_URL}/api/beer/review/${id}`, score)
    .map((res) => res.json());
  }
}
