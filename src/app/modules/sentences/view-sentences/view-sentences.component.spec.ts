import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSentencesComponent } from './view-sentences.component';

describe('ViewSentencesComponent', () => {
  let component: ViewSentencesComponent;
  let fixture: ComponentFixture<ViewSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSentencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
