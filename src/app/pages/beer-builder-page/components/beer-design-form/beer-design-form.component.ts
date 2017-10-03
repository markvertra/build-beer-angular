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
  results: {};
  style: String;
  @Output() onStyleChange = new EventEmitter<string>();
  @Output() onOpacityChange = new EventEmitter<string>();

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

  handleNewBeer(form) {
    const newBeer = { name: form.value.name,
                      beerDetails: { style: form.value.style,
                                     extraColourants: [form.value.colourants],
                                     extraFlavours: [form.value.flavours],
                                     timeToAge: form.value.age },
                      imageURL: form.value.labelURL};
    this.beerService.postBeer(newBeer).subscribe(res => {
      this.results = res;
    });
    this.router.navigate(['/confirm']);
  }
}
