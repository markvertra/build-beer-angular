import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service.service';
import { SessionService } from '../../services/session-service.service';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.component.html',
  styleUrls: ['./order-history-page.component.css']
})
export class OrderHistoryPageComponent implements OnInit {
  orders: any;
  user: any;
  beersOrdered: any;

  constructor(private orderService: OrderService,
              private session: SessionService) { }

  setUser(user: any | null) {
    this.user = user;
  }

  ngOnInit() {
    this.session.isLoggedIn().subscribe(
      (user) => { this.getOrders(user), this.fullUser(user.id) }
    );
  }

  getOrders(user) {
    this.orderService.getOrdersByUser(user.id).subscribe(res => {
      this.orders = res;
    });
  }

  fullUser(id) {
    this.session.getUser(id).subscribe((user => { this.user = user, this.beersOrdered = user.beersOrdered; }));
  }
}
