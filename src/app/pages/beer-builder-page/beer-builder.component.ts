import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session-service.service';
import { BeerService } from '../../services/beer-service.service';

@Component({
  selector: 'app-beer-builder-page',
  templateUrl: './beer-builder.component.html',
  styleUrls: ['./beer-builder.component.css']
})
export class BeerBuilderPageComponent implements OnInit {
  user: any;
  colors = {'Stout': '#32312c',
            'Porter': '#4f3b28',
            'Red Ale': '#9c4f31',
            'Wheat Beer': '#ff9d17',
            'Pilsner': '#ffef00',
            'Pale Ale': '#ffa712',
            'IPA': '#e37b4c'
          };
  color;
  style;
  opacity;
  capColor;
  name;
  labelColor;
  labelFont;
  labelFontColor;
  labelImage;
  labelSlogan;
  @Output() onBeerCreation = new EventEmitter<object>();
  constructor(private router: Router,
              private session: SessionService,
              private beerService: BeerService) { }

  setUser(user: any | null) {
    this.user = user;
  }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) =>  this.setUser(user),
      (err) => this.router.navigateByUrl('/')
    );
    if (this.beerService.recommended) {
      this.style = this.beerService.recommended;
      this.color = this.colors[this.beerService.recommended];
    }
  }

  handleBeerCreation(beer) {
    this.router.navigate(['/profile', this.user.id]);
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

  handleLabelFontColorChange(color) {
    this.labelFontColor = color;
  }

  handleLabelSloganChange(text) {
    this.labelSlogan = text;
  }


  handleLabelImageChange(image) {
    this.labelImage = image;
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
