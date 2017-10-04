import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BeerService } from '../../../../services/beer-service.service';

@Component({
  selector: 'app-beer-design-form',
  templateUrl: './beer-design-form.component.html',
  styleUrls: ['./beer-design-form.component.css'],
  providers: [ BeerService ]
})
export class BeerDesignFormComponent implements OnInit {
  colors = [{code: '#ffffff',
             name: 'Bridal White'},
             {code: '#4169e1',
             name: 'Royal Blue'},
             {code: '#8A0707',
             name: 'Blood Red'},
             {code: '#FFD700',
             name: 'Goblin Gold'},
             {code: '#C0C0C0',
             name: 'Moon Silver'},
             {code: '#000000',
             name: 'Night Black'},
             {code: '#228B22',
             name: 'Forest Green'},
             {code: '#7fffd4',
             name: 'Aquamarine'},
              ];

dbColors = {'Stout': '#32312c',
  'Porter': '#4f3b28',
  'Red Ale': '#9c4f31',
  'Wheat Beer': '#ff9d17',
  'Lager': '#ffef00',
  'Pale Ale': '#ffa712',
  'IPA': '#e37b4c'
  };

  results;
  style: String;
  @Output() onStyleChange = new EventEmitter<string>();
  @Output() onOpacityChange = new EventEmitter<string>();
  @Output() onCapColorChange = new EventEmitter<string>();
  @Output() onNameChange = new EventEmitter<string>();
  @Output() onLabelColorChange = new EventEmitter<string>();
  @Output() onLabelFontChange = new EventEmitter<string>();
  @Output() onLabelFontColorChange = new EventEmitter<string>();
  @Output() onLabelImageChange = new EventEmitter<string>();
  @Output() onLabelSloganChange = new EventEmitter<string>();
  @Output() onBeerCreation = new EventEmitter<object>();

  constructor(private beerService: BeerService,
              private router: Router) { }

  ngOnInit() {
  }

  handleStyleChange(style) {
    this.onStyleChange.emit(style);
  }

  handleOpacityChange(opacity) {
    this.onOpacityChange.emit(opacity);
  }

  handleCapColorChange(color) {
    this.onCapColorChange.emit(color);
  }

  handleLabelFontChange(font) {
    this.onLabelFontChange.emit(font);
  }

  handleLabelColorChange(color) {
    this.onLabelColorChange.emit(color);
  }

  handleLabelImageChange(image) {
    this.onLabelImageChange.emit(image);
  }

  handleLabelSloganChange(text) {
    this.onLabelSloganChange.emit(text);
  }

  handleLabelFontColorChange(color) {
    this.onLabelFontColorChange.emit(color);
  }

  handleNameChange(name) {
    this.onNameChange.emit(name);
  }

  handleNewBeer(form) {
    const newBeer = { name: form.value.name,
                      description: form.value.name + ' is a ' + form.value.style + '. It has a clarity of ' + form.value.colourants + '.',
                      beerDetails: { style: form.value.style,
                                     color: this.dbColors[form.value.style],
                                      opacity: form.value.colourants,
                                      extraFlavours: [form.value.flavours],
                                      timeToAge: form.value.age },
                      labelColor: form.value.labelColor,
                      labelImage: form.value.labelImage,
                      labelFontColor: form.value.labelFontColor,
                      labelSlogan: form.value.labelSlogan,
                      capColor: form.value.capColor };
    this.beerService.postBeer(newBeer).subscribe(res => {
      this.results = res;
      this.onBeerCreation.emit(this.results);
    });
  }
}
