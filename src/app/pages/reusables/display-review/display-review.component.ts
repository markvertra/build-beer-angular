import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../../services/order-service.service';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.css']
})
export class DisplayReviewComponent implements OnInit {
@Input() reviews;
reviewScore: Number;
@Input() beer;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.reviewScore = this.calculateReviewScore();
  }

  calculateReviewScore() {
    const scores = Object.values(this.reviews);
    return scores.reduce((prev, curr) => (prev + Number(curr)), 0) / scores.length;
  }
}
