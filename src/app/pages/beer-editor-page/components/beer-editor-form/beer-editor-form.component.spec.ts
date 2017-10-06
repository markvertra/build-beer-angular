import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerEditorFormComponent } from './beer-editor-form.component';

describe('BeerEditorFormComponent', () => {
  let component: BeerEditorFormComponent;
  let fixture: ComponentFixture<BeerEditorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerEditorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
