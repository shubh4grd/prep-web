import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionSectionComponent } from './correction-section.component';

describe('CorrectionSectionComponent', () => {
  let component: CorrectionSectionComponent;
  let fixture: ComponentFixture<CorrectionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrectionSectionComponent]
    });
    fixture = TestBed.createComponent(CorrectionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
