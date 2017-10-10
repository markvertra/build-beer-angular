import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationEnginePageComponent } from './recommendation-engine-page.component';

describe('RecommendationEnginePageComponent', () => {
  let component: RecommendationEnginePageComponent;
  let fixture: ComponentFixture<RecommendationEnginePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationEnginePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationEnginePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
