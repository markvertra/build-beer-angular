import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDesignFormComponent } from './beer-design-form.component';

describe('BeerDesignFormComponent', () => {
  let component: BeerDesignFormComponent;
  let fixture: ComponentFixture<BeerDesignFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDesignFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDesignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
