import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../../services/order-service.service';

@Component({
  selector: 'app-beer-order-form',
  templateUrl: './beer-order-form.component.html',
  styleUrls: ['./beer-order-form.component.css'],
  providers: [OrderService]
})
export class BeerOrderFormComponent implements OnInit {
  results: Object;

  constructor(private router: RouterModule,
              private orderService: OrderService) { }

  ngOnInit() {
  }

  handleNewOrder(form) {
    const newOrder = {beersOrdered: [{name: 'This Beer',
                                      quantity: form.value.quantity}],
                      deliveryDetails: { firstName: form.value.firstName,
                      lastName: form.value.lastName,
                      address: form.value.address,
                      postcode: form.value.postcode,
                      telephoneNumber: form.value.telephoneNumber,
                      email: form.value.email
                      }};
    this.orderService.postOrder(newOrder).subscribe(res => {
      this.results = res;
    });
  }
}
