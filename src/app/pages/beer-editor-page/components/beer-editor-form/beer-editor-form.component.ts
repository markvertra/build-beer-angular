import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeerService } from '../../../../services/beer-service.service';
import { SessionService } from '../../../../services/session-service.service';

@Component({
  selector: 'app-beer-editor-form',
  templateUrl: './beer-editor-form.component.html',
  styleUrls: ['./beer-editor-form.component.css'],
  providers: [BeerService]
})
export class BeerEditorFormComponent implements OnInit {
  user: any;

    colors = [{code: '#ffffff',
               name: 'Bridal White'},
               {code: '#4169e1',
               name: 'Royal Blue'},
               {code: '#8A0707',
               name: 'Blood Red'},
               {code: '#FFD700',
               name: 'Goblin Gold'},
               {code: '#C0C0C0',
               name: 'Moon Silver'},
               {code: '#000000',
               name: 'Night Black'},
               {code: '#228B22',
               name: 'Forest Green'},
               {code: '#7fffd4',
               name: 'Aquamarine'},
               {code: '#673AB7',
               name: 'Winter Violet'},
               {code: '#EC407A',
               name: 'Cuddly Pink'}
                ];

  dbColors = {'Stout': '#32312c',
    'Porter': '#4f3b28',
    'Red Ale': '#9c4f31',
    'Wheat Beer': '#ff9d17',
    'Pilsner': '#ffef00',
    'Pale Ale': '#ffa712',
    'IPA': '#e37b4c'
    };

    @Input() name: string;
    @Input() style: string;
    @Input() colourants: string;
    @Input() labelSlogan: string;
    @Input() labelImage: string;
    @Input() labelColor: string;
    @Input() labelFont: string;
    @Input() labelFontColor: string;
    @Input() capColor: string;
    @Input() flavours: any;
    @Input() labelSelfImage: string;
    @Input() public: Boolean;

    id: string;
    results;

    @Output() onStyleChange = new EventEmitter<string>();
    @Output() onOpacityChange = new EventEmitter<string>();
    @Output() onCapColorChange = new EventEmitter<string>();
    @Output() onNameChange = new EventEmitter<string>();
    @Output() onLabelColorChange = new EventEmitter<string>();
    @Output() onLabelFontChange = new EventEmitter<string>();
    @Output() onLabelFontColorChange = new EventEmitter<string>();
    @Output() onLabelImageChange = new EventEmitter<string>();
    @Output() onLabelSloganChange = new EventEmitter<string>();
    @Output() onBeerCreation = new EventEmitter<object>();

    constructor(private beerService: BeerService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private session: SessionService) { }

    setUser(user: any | null) {
      this.user = user;
    }

    ngOnInit() {
      this.session.isLoggedIn().subscribe(
        (user) => { this.setUser(user); }
      );
      this.activatedRoute.params.subscribe(params =>
        this.id = params['id']) ;
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

    handleLabelFontChange(font) {
      this.onLabelFontChange.emit(font);
    }

    handleLabelColorChange(color) {
      this.onLabelColorChange.emit(color);
    }

    handleLabelImageChange(image) {
      this.onLabelImageChange.emit(image);
    }

    handleLabelSloganChange(text) {
      this.onLabelSloganChange.emit(text);
    }

    handleLabelFontColorChange(color) {
      this.onLabelFontColorChange.emit(color);
    }

    handleLabelSelfImageChange(labelSelfImage) {
      this.handleLabelImageChange(labelSelfImage);
    }

    handleNameChange(name) {
      this.onNameChange.emit(name);
    }

    handleUpdatedBeer(form) {
      const updatedBeer = { name: form.value.name,
                        description: form.value.name + ' is a ' + form.value.style + '. It has a clarity of ' + form.value.colourants + '.',
                        style: form.value.style,
                        color: this.dbColors[form.value.style],
                        opacity: form.value.colourants,
                        flavors: form.value.flavours,
                        timeToAge: form.value.age,
                        labelFont: form.value.labelFont,
                        labelColor: form.value.labelColor,
                        labelImage: form.value.labelImage,
                        labelFontColor: form.value.labelFontColor,
                        labelSlogan: form.value.labelSlogan,
                        capColor: form.value.capColor,
                        creatorId: this.user.id,
                        isPublic: this.public };
      this.beerService.putBeer(this.id, updatedBeer).subscribe(res => {
        this.results = res;
        this.onBeerCreation.emit(this.results);
        this.router.navigateByUrl('profile/' + this.user.id);
      });
    }
  }

