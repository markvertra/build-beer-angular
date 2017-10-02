import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-beer-image',
  templateUrl: './beer-image.component.html',
  styleUrls: ['./beer-image.component.css']
})
export class BeerImageComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  colors = {stout: '#32312c',
            porter: '#4f3b28',
            redAle: '#9c4f31',
            wheatBeer: '#ff9d17',
            lager: '#ffef00',
            paleAle: '#ffa712',
            ipa: '#e37b4c'
            };
  color = this.colors.lager;

  constructor() { }

  ngAfterViewInit() {
    const ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(50, 500);
    ctx.lineTo(250, 500);
    ctx.lineTo(300, 50);
    ctx.fill();
  }

}
