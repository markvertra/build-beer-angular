import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.css']
})
export class DisplayReviewComponent implements OnInit {
@Input() reviews;
reviewScore: Number;

  constructor() { }

  ngOnInit() {
    this.reviewScore = this.calculateReviewScore();
  }

  calculateReviewScore() {
    const scores = Object.values(this.reviews);
    console.log(scores.length);
    console.log(scores);
    return scores.reduce((prev, curr) => (prev + Number(curr)), 0) / scores.length;
  }
}
