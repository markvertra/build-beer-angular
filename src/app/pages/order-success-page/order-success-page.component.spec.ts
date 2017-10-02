import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessPageComponent } from './order-success-page.component';

describe('OrderSucccessPageComponent', () => {
  let component: OrderSuccessPageComponent;
  let fixture: ComponentFixture<OrderSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
