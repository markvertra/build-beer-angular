import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../../services/beer-service.service';

@Component({
  selector: 'app-beer-display-frame',
  templateUrl: './beer-display-frame.component.html',
  styleUrls: ['./beer-display-frame.component.css']
})
export class BeerDisplayFrameComponent implements OnInit {
  colors = {'Stout': '#32312c',
  'Porter': '#4f3b28',
  'Red Ale': '#9c4f31',
  'Wheat Beer': '#ff9d17',
  'Lager': '#ffef00',
  'Pale Ale': '#ffa712',
  'IPA': '#e37b4c'
};
  beer;
  color: String;


  constructor(private route: ActivatedRoute,
              private beerService: BeerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBeer(params['id']);
    });
  }

  getBeer(id) {
    this.beerService.getBeer(id).subscribe((res) => this.beer = res);
    this.color = this.colors[this.beer.beerDetails.style];
  }
}
