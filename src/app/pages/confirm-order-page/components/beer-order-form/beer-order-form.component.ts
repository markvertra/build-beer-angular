import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../../services/order-service.service';

@Component({
  selector: 'app-beer-order-form',
  templateUrl: './beer-order-form.component.html',
  styleUrls: ['./beer-order-form.component.css'],
  providers: [OrderService]
})
export class BeerOrderFormComponent implements OnInit {
  @Input () beerCreated;
  results: Object;
  constructor(private router: Router,
              private orderService: OrderService) { }

  ngOnInit() {
  }

  handleNewOrder(form) {
    const newOrder = {beersOrdered: [{beer: this.beerCreated,
                                      quantity: form.value.quantity}],
                      deliveryDetails: { firstName: form.value.firstName,
                      lastName: form.value.lastName,
                      address: form.value.address,
                      city: form.value.city,
                      postcode: form.value.postcode,
                      telephoneNumber: form.value.telephoneNumber,
                      email: form.value.email
                      }};
    this.orderService.postOrder(newOrder).subscribe(res => {
      this.results = res;
    });
    this.router.navigate(['/success']);
  }
}
