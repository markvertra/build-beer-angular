import { Component,
        AfterViewInit,
        ViewChild,
        ElementRef,
        Input,
        OnChanges } from '@angular/core';

@Component({
  selector: 'app-beer-image',
  templateUrl: './beer-image.component.html',
  styleUrls: ['./beer-image.component.css']
})
export class BeerImageComponent implements AfterViewInit, OnChanges {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  colors = {stout: '#32312c',
            porter: '#4f3b28',
            redAle: '#9c4f31',
            wheatBeer: '#ff9d17',
            lager: '#ffef00',
            paleAle: '#ffa712',
            ipa: '#e37b4c'
            };
  @Input() color;
  @Input() opacity;
  @Input() capColor;
  @Input() name;
  @Input() labelColor;

  constructor() { }

  ngAfterViewInit() {
    this.drawCanvas(this.color, this.opacity, this.capColor, this.labelColor, this.name);
  }

  ngOnChanges() {
    this.drawCanvas(this.color, this.opacity, this.capColor, this.labelColor, this.name);
  }

  drawCanvas(color, opacity, capColor, labelColor, name) {
    const ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color || '#000000';
    ctx.beginPath();
    ctx.moveTo(50, 25);
    ctx.quadraticCurveTo(43, 30, 50, 35);
    ctx.lineTo(50, 40);
    ctx.quadraticCurveTo(40, 45, 50, 50);
    ctx.lineTo(30, 150);
    ctx.quadraticCurveTo(10, 175, 0, 200);
    ctx.lineTo(0, 500);
    ctx.quadraticCurveTo(75, 530, 150, 500);
    ctx.lineTo(150, 200);
    ctx.quadraticCurveTo(140, 175, 120, 150);
    ctx.lineTo(100, 50);
    ctx.quadraticCurveTo(110, 45, 100, 40);
    ctx.lineTo(100, 35);
    ctx.quadraticCurveTo(107, 30, 100, 25);
    ctx.fill();

    this.drawCap(ctx, capColor);
    this.drawCap(ctx, capColor);
    this.drawCap(ctx, capColor);

    this.drawLabel(ctx, labelColor);
    this.drawLabel(ctx, labelColor);
    this.drawLabel(ctx, labelColor);

    this.labelGraphics(ctx, name);
    this.labelGraphics(ctx, name);
    this.labelGraphics(ctx, name);
    this.labelGraphics(ctx, name);
    this.labelGraphics(ctx, name);
  }

  drawCap(ctx, capColor) {
    ctx.beginPath();
    ctx.fillStyle = capColor || '#000000';
    ctx.moveTo(48, 25);
    ctx.quadraticCurveTo(41, 27, 45, 36);
    ctx.lineTo(104, 36);
    ctx.quadraticCurveTo(109, 27, 102, 25);
    ctx.fill();
  }

  drawLabel(ctx, color) {
    ctx.beginPath();
    ctx.fillStyle = color || '#000000';
    ctx.moveTo(0, 250);
    ctx.lineTo(0, 450);
    ctx.quadraticCurveTo(75, 475, 150, 450);
    ctx.lineTo(150, 250);
    ctx.quadraticCurveTo(75, 255, 0, 250);
    ctx.fill();
  }

  labelGraphics(ctx, name) {
    ctx.font = '30px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText(name || '', 50, 300);
  }

}
