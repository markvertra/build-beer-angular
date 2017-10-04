import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-confirm-order-page',
  templateUrl: './confirm-order-page.component.html',
  styleUrls: ['./confirm-order-page.component.css']
})
export class ConfirmOrderPageComponent implements OnInit {
  colors = {'Stout': '#32312c',
  'Porter': '#4f3b28',
  'Red Ale': '#9c4f31',
  'Wheat Beer': '#ff9d17',
  'Pilsner': '#ffef00',
  'Pale Ale': '#ffa712',
  'IPA': '#e37b4c'
};
  @Input() beerCreated;
  color;
  opacity;
  labelColor;
  labelFontColor;
  labelImage;
  labelFont;
  labelSlogan;
  capColor;
  name;

  constructor() { }

  ngOnInit() {
    this.color = this.colors[this.beerCreated.beerDetails.style];
    if (this.beerCreated.beerDetails.opacity === 'Clear') {
      this.opacity = 0.7;
    } else if (this.beerCreated.beerDetails.opacity === 'Medium') {
      this.opacity = 0.85;
    } else if (this.beerCreated.beerDetails.opacity === 'Opaque') {
      this.opacity = 1;
    }
    this.labelColor = this.beerCreated.label.color;
    this.capColor = this.beerCreated.cap.color;
    this.name = this.beerCreated.name;
    this.labelFontColor = this.beerCreated.label.fontColor;
    this.labelImage = this.beerCreated.label.image;
    this.labelFont = this.beerCreated.label.font;
    this.labelSlogan = this.beerCreated.label.slogan;
  }

}
