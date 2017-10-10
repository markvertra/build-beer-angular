import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../../services/order-service.service';
import { SessionService } from '../../../../services/session-service.service';

@Component({
  selector: 'app-beer-order-form',
  templateUrl: './beer-order-form.component.html',
  styleUrls: ['./beer-order-form.component.css'],
})
export class BeerOrderFormComponent implements OnInit {
  checkoutBasket: any;
  quantity: Number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  telephoneNumber: string;
  email: string;
  user: any;
  error;
  @Output() onStatusChange = new EventEmitter<string>();
  @Output() onOrderConfirm = new EventEmitter<Object>();

  results: Object;
  constructor(private router: Router,
              private orderService: OrderService,
              private session: SessionService) { }

  setUser(user: any | null) {
    this.user = user;
  }

  ngOnInit() {
    this.checkoutBasket = this.orderService.checkoutBasket;
    this.session.isLoggedIn()
    .subscribe(
      (user) => { this.setUser(user); }
    );
  }

  handleNewOrder(form: any) {
    if (!this.checkEmail()) {
      this.error = 'Please enter a valid email address';
    } else if (!this.checkNumber()) {
      this.error = 'Please enter a valid telephone number';
    } else {
      const deliveryDetails = { firstName: form.value.firstName,
        lastName: form.value.lastName,
        address: form.value.address,
        city: form.value.city,
        postcode: form.value.postcode,
        telephoneNumber: form.value.telephoneNumber,
        email: form.value.email };
      const newOrder = { beersOrdered: this.orderService.checkoutBasket,
                        deliveryDetails: deliveryDetails,
                        userOrdering: this.user.id};
      this.orderService.deliveryDetails = deliveryDetails;
      this.orderService.postOrder(this.user.id, newOrder).subscribe(res => {
        this.results = res;
      });
      this.orderService.zapOrder(newOrder).subscribe(res => {
        this.results = res;
      });
      this.onOrderConfirm.emit(newOrder);
      this.onStatusChange.emit();
    }
  }

  checkEmail() {
    // tslint:disable-next-line:max-line-length
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(this.email);
    }

  checkNumber() {
    const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phoneRegEx.test(this.telephoneNumber);
  }
}
