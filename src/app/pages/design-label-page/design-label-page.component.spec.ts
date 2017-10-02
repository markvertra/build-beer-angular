import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLabelPageComponent } from './design-label-page.component';

describe('DesignLabelPageComponent', () => {
  let component: DesignLabelPageComponent;
  let fixture: ComponentFixture<DesignLabelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLabelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLabelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
