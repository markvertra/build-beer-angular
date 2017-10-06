import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerEditorPageComponent } from './beer-editor-page.component';

describe('BeerEditorPageComponent', () => {
  let component: BeerEditorPageComponent;
  let fixture: ComponentFixture<BeerEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
