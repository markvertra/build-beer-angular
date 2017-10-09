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
  firstName: String;
  lastName: String;
  address: String;
  city: String;
  postcode: String;
  telephoneNumber: String;
  email: String;
  user: any;
  @Output() onStatusChange = new EventEmitter<String>();
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
    console.log(this.checkoutBasket);
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
