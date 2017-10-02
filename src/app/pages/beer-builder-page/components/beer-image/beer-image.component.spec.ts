import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleImageComponent } from './bottle-image.component';

describe('BottleImageComponent', () => {
  let component: BottleImageComponent;
  let fixture: ComponentFixture<BottleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
