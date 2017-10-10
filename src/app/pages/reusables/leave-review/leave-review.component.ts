import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../../../services/beer-service.service';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.css']
})
export class LeaveReviewComponent implements OnInit {
  reviewScore: Number;
  results;
  beerReviews: Object;
  hideStars = false;
  reviewed: boolean;
  @Input () beerId;
  @Input () user;

  constructor(private beerService: BeerService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.getBeerReviews();
  }

  setUser(user: any | null) {
    this.user = user;
  }

  getBeerReviews() {
    this.beerService.getBeer(this.beerId).subscribe(res => { this.beerReviews = res.reviews,
                                                             this.reviewed = this.checkBeerReviews(res.reviews); });
  }

  handleReviewLeft() {
    const userId = this.user.id;
    if (!this.beerReviews) {
      this.beerReviews = {};
    }
    this.beerReviews[userId] = this.reviewScore;
    this.hideStars = true;
    this.beerService.addReview(this.beerId, this.beerReviews).subscribe(res => { this.results = res; });
    this.getBeerReviews();
    this.reviewed = this.checkBeerReviews(this.beerReviews);
  }

  handleSetReviewValue(int: Number) {
    this.reviewScore = int;
    this.handleReviewLeft();
  }

  getUser(id) {
    this.sessionService.getUser(id).subscribe((res) => this.user = res);
    }

  checkBeerReviews(reviews): boolean {
    Object.keys(reviews).forEach((item) => {
      if (item + '' === this.user.id + '') {
        return false;
      }
    });
    return true;
  }
}
