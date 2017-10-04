import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDisplayFrameComponent } from './beer-display-frame.component';

describe('BeerDisplayFrameComponent', () => {
  let component: BeerDisplayFrameComponent;
  let fixture: ComponentFixture<BeerDisplayFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDisplayFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDisplayFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
