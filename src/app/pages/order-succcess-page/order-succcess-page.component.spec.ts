import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSucccessPageComponent } from './order-succcess-page.component';

describe('OrderSucccessPageComponent', () => {
  let component: OrderSucccessPageComponent;
  let fixture: ComponentFixture<OrderSucccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSucccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSucccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
