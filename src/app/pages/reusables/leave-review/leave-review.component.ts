import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../../../services/beer-service.service';
import { SessionService } from '../../../services/session-service.service';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.css']
})
export class LeaveReviewComponent implements OnInit {
  review: object;
  reviewScore: number;
  user: any;
  results;
  @Input () beerId;

  constructor(private beerService: BeerService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.isLoggedIn()
    .subscribe(
      (user) => { this.setUser(user); }
    );
  }

  setUser(user: any | null) {
    this.user = user;
  }

  handleReviewLeft() {
    const userId = this.user.id;
    this.review = {user: userId, score: this.reviewScore};
    this.beerService.addReview(this.beerId, this.review).subscribe(res => { this.results = res; });
  }

  getUser(id) {
    this.sessionService.getUser(id).subscribe((res) => this.user = res);
    }
}
