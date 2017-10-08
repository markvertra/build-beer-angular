import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderResultsPageComponent } from './order-results-page.component';

describe('OrderResultsPageComponent', () => {
  let component: OrderResultsPageComponent;
  let fixture: ComponentFixture<OrderResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
