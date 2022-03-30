import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearSentenceDialogComponent } from './clear-sentence-dialog.component';

describe('ClearSentenceDialogComponent', () => {
  let component: ClearSentenceDialogComponent;
  let fixture: ComponentFixture<ClearSentenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearSentenceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearSentenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
