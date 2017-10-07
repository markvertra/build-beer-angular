import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../../../services/beer-service.service';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.css']
})
export class LeaveReviewComponent implements OnInit {
  reviewScore: number;
  user: any;
  results;
  beerReviews;
  @Input () beerId;

  constructor(private beerService: BeerService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.isLoggedIn()
    .subscribe(
      (user) => { this.setUser(user); }
    );
    this.getBeerReviews();
  }

  setUser(user: any | null) {
    this.user = user;
  }

  getBeerReviews() {
    this.beerService.getBeer(this.beerId).subscribe(res => this.beerReviews = res.reviews);
  }

  handleReviewLeft() {
    const userId = this.user.id;
    this.beerReviews[userId] = this.reviewScore;
    this.beerService.addReview(this.beerId, this.beerReviews).subscribe(res => { this.results = res; });
  }

  handleSetReviewValue(int: number) {
    this.reviewScore = int;
    this.handleReviewLeft();
  }

  getUser(id) {
    this.sessionService.getUser(id).subscribe((res) => this.user = res);
    }
}
