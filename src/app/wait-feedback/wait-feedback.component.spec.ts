import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitFeedbackComponent } from './wait-feedback.component';

describe('WaitFeedbackComponent', () => {
  let component: WaitFeedbackComponent;
  let fixture: ComponentFixture<WaitFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
