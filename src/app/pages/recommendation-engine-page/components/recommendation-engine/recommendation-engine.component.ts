import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation-engine',
  templateUrl: './recommendation-engine.component.html',
  styleUrls: ['./recommendation-engine.component.css']
})
export class RecommendationEngineComponent implements OnInit {
  holiday;
  meal;
  season;
  error;

  stylePoints = {'Red Ale': 0,
  'IPA': 0,
  'Pale Ale': 0,
  'Porter': 0,
  'Stout': 0,
  'Wheat': 0,
  'Pilsner': 0};

  constructor() { }

  ngOnInit() {
  }

  handleNewRecommendation(form) {
    if (!this.holiday || !this.meal || !this.season) {
      this.error = 'Please fill in all fields'
    }
    console.log(this.holiday);
    console.log(this.meal);
    console.log(this.season);
  }
}
