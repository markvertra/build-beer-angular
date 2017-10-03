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
  @Input() labelFont;
  @Input() labelFontColor;
  @Input() labelImage;
  @Input() labelSlogan;

  constructor() { }

  ngAfterViewInit() {
    this.drawCanvas(this.color, this.opacity, this.capColor, this.labelColor,
                    this.name, this.labelFont, this.labelFontColor,
                    this.labelImage, this.labelSlogan);
  }

  ngOnChanges() {
    this.drawCanvas(this.color, this.opacity, this.capColor, this.labelColor,
                    this.name, this.labelFont, this.labelFontColor,
                    this.labelImage, this.labelSlogan);
  }

  drawCanvas(color, opacity, capColor, labelColor, name, font, fontColor, labelImage, labelSlogan) {
    const ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 1000, 1000);

    this.drawShadow(ctx);
    this.drawShadow(ctx);
    this.drawShadow(ctx);

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

    this.labelGraphics(ctx, name, font, fontColor, labelImage, labelSlogan);
    this.labelGraphics(ctx, name, font, fontColor, labelImage, labelSlogan);
    this.labelGraphics(ctx, name, font, fontColor, labelImage, labelSlogan);
    this.labelGraphics(ctx, name, font, fontColor, labelImage, labelSlogan);
    this.labelGraphics(ctx, name, font, fontColor, labelImage, labelSlogan);

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

  drawShadow(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#404040';
    ctx.moveTo(150, 500);
    ctx.lineTo(220, 250);
    ctx.quadraticCurveTo(217, 225, 208, 210);
    ctx.lineTo(220, 130);
    ctx.quadraticCurveTo(230, 125, 222, 120);
    ctx.lineTo(223, 116);
    ctx.quadraticCurveTo(235, 111, 224, 106);
    ctx.lineTo(184, 106);
    ctx.quadraticCurveTo(173, 111, 183, 116);
    ctx.lineTo(181, 120);
    ctx.quadraticCurveTo(171, 125, 180, 130);
    ctx.lineTo(150, 200);
    ctx.fill();
  }

  labelGraphics(ctx, name, font, fontColor, labelImage, labelSlogan) {
    ctx.font = '18px ' + font;
    ctx.textAlign = 'center';
    this.labelLogo(ctx, labelImage);
    ctx.fillStyle = fontColor || 'white';
    ctx.fillText(name || '', 75, 300);
    ctx.fillText(labelSlogan || '', 75, 425);
  }

  labelLogo(ctx, icon) {
    if (icon === 'star') {
      this.drawStar(ctx);
    } else if (icon === 'badge') {
      this.drawBadge(ctx);
    } else if (icon === 'irongram') {
      this.drawIron(ctx);
    }
  }

  drawStar(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 325);
    ctx.lineTo(85, 350);
    ctx.lineTo(110, 345);
    ctx.lineTo(90, 370);
    ctx.lineTo(100, 400);
    ctx.lineTo(75, 380);
    ctx.lineTo(50, 400);
    ctx.lineTo(60, 370);
    ctx.lineTo(40, 345);
    ctx.lineTo(65, 350);
    ctx.fill();
  }

  drawBadge(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 325);
    ctx.quadraticCurveTo(92.5, 345, 110, 325);
    ctx.quadraticCurveTo(92.5, 380, 75, 400);
    ctx.quadraticCurveTo(57.5, 380, 40, 325);
    ctx.quadraticCurveTo(57.5, 345, 75, 325);
    ctx.fill();
  }

  drawIron(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 325);
    ctx.lineTo(110, 345);
    ctx.lineTo(110, 380);
    ctx.lineTo(75, 400);
    ctx.lineTo(40, 380);
    ctx.lineTo(40, 345);
    ctx.fill();
  }

}
