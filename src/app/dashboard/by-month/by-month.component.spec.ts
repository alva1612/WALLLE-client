import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByMonthComponent } from './by-month.component';

describe('ByMonthComponent', () => {
  let component: ByMonthComponent;
  let fixture: ComponentFixture<ByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
