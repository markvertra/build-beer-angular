import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerOrderFormComponent } from './beer-order-form.component';

describe('BeerOrderFormComponent', () => {
  let component: BeerOrderFormComponent;
  let fixture: ComponentFixture<BeerOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
