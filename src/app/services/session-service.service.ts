import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

import { User } from '../models/user';


@Injectable()
export class SessionService {

  private initialized: boolean;
  private user: User;
  private userChange: Subject<User | null> = new Subject();

  userChange$ = this.userChange.asObservable();

  BASE_URL = environment.API_URL;
  constructor(private http: Http) { }

  private setUser(user: User = null) {
    this.user = user;
    this.userChange.next(user);
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user: User) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(`${this.BASE_URL}/auth/signup`, user, options)
      .map(res => {
        // tslint:disable-next-line:no-shadowed-variable
        const user = new User(res.json());
        this.setUser(user);
        return user;
      });
  }

  login(user) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(`${this.BASE_URL}/auth/login`, user, options)
      .map(res => {
        const user = new User(res.json());
        this.setUser(user);
        return user;
      });
  }

  logout() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(`${this.BASE_URL}/auth/logout`, {}, options)
    .map(res => {
      this.setUser();
      return null;
    });
  }

  isLoggedIn() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(`${this.BASE_URL}/auth/loggedin`, options)
      .map(res => {
        const user = new User(res.json());
        this.setUser(user);
        return user;
      }, (err) => {
        if ( err.status === 404) {
          this.setUser();
        }
      });
  }

  getUser(id: string) {
    return this.http.get(`${this.BASE_URL}/auth/userInfo/${id}`)
      .map((res) => res.json());
  }


  initialize() {
    if (!this.initialized) {
      this.initialized = true;
      this.isLoggedIn().subscribe();
    }
  }
}
