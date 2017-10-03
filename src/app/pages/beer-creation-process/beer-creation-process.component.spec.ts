import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreationProcessComponent } from './beer-creation-process.component';

describe('BeerCreationProcessComponent', () => {
  let component: BeerCreationProcessComponent;
  let fixture: ComponentFixture<BeerCreationProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCreationProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCreationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
