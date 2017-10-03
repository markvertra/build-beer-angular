import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  capColor;
  name;
  labelColor;
  labelFont;
  @Output() onBeerCreation = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  handleBeerCreation(beer) {
    this.onBeerCreation.emit(beer);
  }

  handleStyleChange(style) {
    this.color = this.colors[style];
  }

  handleCapColorChange(color) {
    this.capColor = color;
  }

  handleLabelColorChange(color) {
    this.labelColor = color;
  }

  handleLabelFontChange(font) {
    this.labelFont = font;
  }

  handleNameChange(name) {
    this.name = name;
  }

  handleOpacityChange(opacity) {
    if (opacity === 'Clear') {
      this.opacity = 0.7;
    } else if (opacity === 'Medium') {
      this.opacity = 0.85;
    } else if (opacity === 'Opaque') {
      this.opacity = 1;
    }
  }
}
