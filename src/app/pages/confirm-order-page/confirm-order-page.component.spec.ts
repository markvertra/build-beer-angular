import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrderPageComponent } from './confirm-order-page.component';

describe('ConfirmOrderPageComponent', () => {
  let component: ConfirmOrderPageComponent;
  let fixture: ComponentFixture<ConfirmOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
