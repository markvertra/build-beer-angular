import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBuilderComponent } from './beer-builder.component';

describe('BeerBuilderComponent', () => {
  let component: BeerBuilderComponent;
  let fixture: ComponentFixture<BeerBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
