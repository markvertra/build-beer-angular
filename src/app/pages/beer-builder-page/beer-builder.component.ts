import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-builder-page',
  templateUrl: './beer-builder.component.html',
  styleUrls: ['./beer-builder.component.css']
})
export class BeerBuilderPageComponent implements OnInit {
  colors = {'Stout': '#32312c',
            'Porter': '#4f3b28',
            'Red Ale': '#9c4f31',
            'Wheat Beer': '#ff9d17',
            'Lager': '#ffef00',
            'Pale Ale': '#ffa712',
            'IPA': '#e37b4c'
          };
  color;
  opacity;
  constructor() { }

  ngOnInit() {
  }

  handleStyleChange(style) {
    this.color = this.colors[style];
  }

  handleOpacityChange(opacity) {
    if (opacity === 'Clear') {
      this.opacity = 0.5;
    } else if (opacity === 'Medium') {
      this.opacity = 0.75;
    } else if (opacity === 'Opaque') {
      this.opacity = 1;
    }
  }
}
