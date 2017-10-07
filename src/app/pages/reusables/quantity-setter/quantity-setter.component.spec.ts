import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySetterComponent } from './quantity-setter.component';

describe('QuantitySetterComponent', () => {
  let component: QuantitySetterComponent;
  let fixture: ComponentFixture<QuantitySetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantitySetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitySetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
