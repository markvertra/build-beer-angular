import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.css']
})
export class DisplayReviewComponent implements OnInit {
@Input() reviews;

  constructor() { }

  ngOnInit() {
  }

}
