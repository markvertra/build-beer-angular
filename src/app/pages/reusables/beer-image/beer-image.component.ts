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
    ctx.moveTo(150, 25);
    ctx.quadraticCurveTo(143, 30, 150, 35);
    ctx.lineTo(150, 40);
    ctx.quadraticCurveTo(140, 45, 150, 50);
    ctx.lineTo(130, 150);
    ctx.quadraticCurveTo(110, 175, 100, 200);
    ctx.lineTo(100, 500);
    ctx.quadraticCurveTo(175, 530, 250, 500);
    ctx.lineTo(250, 200);
    ctx.quadraticCurveTo(240, 175, 220, 150);
    ctx.lineTo(200, 50);
    ctx.quadraticCurveTo(210, 45, 200, 40);
    ctx.lineTo(200, 35);
    ctx.quadraticCurveTo(207, 30, 200, 25);
    ctx.fill();
  }

}
