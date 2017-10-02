import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../../../services/beer-service.service';

@Component({
  selector: 'app-beer-design-form',
  templateUrl: './beer-design-form.component.html',
  styleUrls: ['./beer-design-form.component.css'],
  providers: [ BeerService ]
})
export class BeerDesignFormComponent implements OnInit {
  results: {};

  constructor(private beerService: BeerService) { }

  ngOnInit() {
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
  }
}
