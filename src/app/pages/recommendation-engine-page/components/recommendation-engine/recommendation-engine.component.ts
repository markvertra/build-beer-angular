import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../../../services/beer-service.service';

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
  recommended;
  inspired;

  stylePoints = {'Red Ale': 0,
                'IPA': 0,
                'Pale Ale': 0,
                'Porter': 0,
                'Stout': 0,
                'Wheat Beer': 0,
                'Pilsner': 0};
  flavourPoints = {'Smoky': 0,
                'Citrus': 0,
                'Grape': 0,
                'Apricot': 0,
                'Orange': 0,
                'Coriander': 0,
                'Vanilla': 0,
                'Blueberry': 0,
                'Strawberry': 0,
                'Chili': 0,
                'Chocolate': 0,
                'Coffee': 0,
                'Caramel': 0 };

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  handleNewRecommendation(form) {
    if (!this.holiday || !this.meal || !this.season) {
      this.error = 'Please fill in all fields';
    } else {
      switch (this.season) {
        case 'Summer':
          this.addStylePoints('IPA', 2);
          this.addStylePoints('Wheat Beer', 1);
          this.addStylePoints('Pilsner', 3);
          break;
        case 'Spring':
          this.addStylePoints('IPA', 2);
          this.addStylePoints('Pilsner', 1);
          this.addStylePoints('Pale Ale', 3);
          break;
        case 'Winter':
          this.addStylePoints('Porter', 2);
          this.addStylePoints('Red Ale', 1);
          this.addStylePoints('Stout', 3);
          break;
        case 'Autumn':
          this.addStylePoints('Pale Ale', 2);
          this.addStylePoints('Porter', 1);
          this.addStylePoints('Red Ale', 3);
          break;
      }
      switch (this.meal) {
        case 'Barbeque':
          this.addStylePoints('Red Ale', 2);
          this.addStylePoints('Stout', 1);
          this.addStylePoints('Porter', 3);
          break;
        case 'Fruit':
          this.addStylePoints('Wheat Beer', 2);
          this.addStylePoints('Pale', 1);
          this.addStylePoints('IPA', 3);
          break;
        case 'Chocolate':
          this.addStylePoints('Wheat Beer', 1);
          this.addStylePoints('Stout', 3);
          this.addStylePoints('Porter', 2);
          break;
        case 'Lasagna':
          this.addStylePoints('Pale Ale', 1);
          this.addStylePoints('Stout', 3);
          this.addStylePoints('Wheat Beer', 2);
          break;
      }
      switch (this.holiday) {
        case 'Beach':
          this.addStylePoints('IPA', 2);
          this.addStylePoints('Wheat Beer', 1);
          this.addStylePoints('Pilsner', 3);
          break;
        case 'Mountain':
          this.addStylePoints('Red Ale', 3);
          this.addStylePoints('Wheat Beer', 2);
          this.addStylePoints('Porter', 2);
          break;
        case 'City':
          this.addStylePoints('IPA', 3);
          this.addStylePoints('Pale Ale', 2);
          this.addStylePoints('Pilsner', 1);
          break;
        case 'Skiing':
          this.addStylePoints('Stout', 3);
          this.addStylePoints('Porter', 2);
          this.addStylePoints('Red Ale', 1);
          break;
      }
    }
    this.findRecommendation();
    this.inspired = !this.inspired;
  }

  addStylePoints(style, points) {
    this.stylePoints[style] += points;
  }

  addFlavourPoints(flavour, points) {
    this.flavourPoints[flavour] += points;
  }

  findRecommendation() {
    let maxItem = '';
    let maxCount = 0;
    Object.keys(this.stylePoints).forEach((item) => {
      if (this.stylePoints[item] > maxCount) {
        maxItem = item;
        maxCount = this.stylePoints[item];
      }
    });
    this.recommended = maxItem;
  }

  handleRecommendation() {
    this.beerService.recommended = this.recommended;
  }
}
