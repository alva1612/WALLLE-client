import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFeedbackComponent } from './register-feedback.component';

describe('RegisterFeedbackComponent', () => {
  let component: RegisterFeedbackComponent;
  let fixture: ComponentFixture<RegisterFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
