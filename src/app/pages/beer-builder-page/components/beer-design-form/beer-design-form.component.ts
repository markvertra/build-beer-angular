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
  results;
  style: String;
  @Output() onStyleChange = new EventEmitter<string>();
  @Output() onOpacityChange = new EventEmitter<string>();
  @Output() onCapColorChange = new EventEmitter<string>();
  @Output() onNameChange = new EventEmitter<string>();
  @Output() onLabelColorChange = new EventEmitter<string>();
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

  handleLabelColorChange(color) {
    this.onLabelColorChange.emit(color);
  }

  handleNameChange(name) {
    this.onNameChange.emit(name);
  }

  handleNewBeer(form) {
    const newBeer = { name: form.value.name,
                      beerDetails: { style: form.value.style,
                                    opacity: form.value.colourants,
                                    extraFlavours: [form.value.flavours],
                                    timeToAge: form.value.age },
                      labelColor: form.value.labelColor,
                      capColor: form.value.capColor };
    this.beerService.postBeer(newBeer).subscribe(res => {
      this.results = res;
      this.onBeerCreation.emit(this.results);
    });
  }
}
