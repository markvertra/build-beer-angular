import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../../services/beer-service.service';

@Component({
  selector: 'app-beer-display-frame',
  templateUrl: './beer-display-frame.component.html',
  styleUrls: ['./beer-display-frame.component.css']
})
export class BeerDisplayFrameComponent implements OnInit {
  beer;
  color;

  constructor(private route: ActivatedRoute,
              private beerService: BeerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBeer(params['id']);
    });
  }

  getBeer (id) {
    this.beerService.getBeer(id).subscribe((res) => this.beer = res);
  }

}
