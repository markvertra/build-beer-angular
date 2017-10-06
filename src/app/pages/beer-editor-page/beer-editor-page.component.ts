import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beer-service.service';

@Component({
  selector: 'app-beer-editor-page',
  templateUrl: './beer-editor-page.component.html',
  styleUrls: ['./beer-editor-page.component.css']
})

export class BeerEditorPageComponent implements OnInit {
  colors = {'Stout': '#32312c',
            'Porter': '#4f3b28',
            'Red Ale': '#9c4f31',
            'Wheat Beer': '#ff9d17',
            'Pilsner': '#ffef00',
            'Pale Ale': '#ffa712',
            'IPA': '#e37b4c'
          };
  color: String;
  style: String;
  opacity: any;
  capColor: String;
  name: String;
  flavours: any;
  labelColor: String;
  labelFont: String;
  labelFontColor: String;
  labelImage: String;
  labelSlogan: String;
  public: String;

  @Output() onBeerCreation = new EventEmitter<object>();

  constructor(private route: ActivatedRoute,
              private beerService: BeerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBeer(params['id']);
    });
  }

  getBeer (id) {
    this.beerService.getBeer(id).subscribe((res) => ( this.name = res.name,
                                                      this.style = res.beerDetails.style,
                                                      this.color = this.colors[res.beerDetails.style],
                                                      this.flavours = res.beerDetails.extraFlavours,
                                                      this.labelColor = res.label.color,
                                                      this.labelFont = res.label.font,
                                                      this.labelFontColor = res.label.fontColor,
                                                      this.labelImage = res.label.image,
                                                      this.labelSlogan = res.label.slogan,
                                                      this.capColor = res.cap.color,
                                                      this.color = this.colors[res.beerDetails.style],
                                                      this.opacity = res.beerDetails.opacity,
                                                      this.public = res.isPublic));
  }

  handleBeerCreation(beer) {
    this.onBeerCreation.emit(beer);
  }

  handleStyleChange(style) {
    this.color = this.colors[style];
  }

  handleCapColorChange(color) {
    this.capColor = color;
  }

  handleLabelColorChange(color) {
    this.labelColor = color;
  }

  handleLabelFontColorChange(color) {
    this.labelFontColor = color;
  }

  handleLabelSloganChange(text) {
    this.labelSlogan = text;
  }


  handleLabelImageChange(image) {
    this.labelImage = image;
  }

  handleLabelFontChange(font) {
    this.labelFont = font;
  }

  handleNameChange(name) {
    this.name = name;
  }

  handleOpacityChange(opacity) {
    if (opacity === 'Clear') {
      this.opacity = 0.7;
    } else if (opacity === 'Medium') {
      this.opacity = 0.85;
    } else if (opacity === 'Opaque') {
      this.opacity = 1;
    }
  }
}

