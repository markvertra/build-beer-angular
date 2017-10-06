import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDisplayComponent } from './beer-display.component';

describe('BeerDisplayComponent', () => {
  let component: BeerDisplayComponent;
  let fixture: ComponentFixture<BeerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
