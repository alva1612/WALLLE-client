import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByScoreComponent } from './by-score.component';

describe('ByScoreComponent', () => {
  let component: ByScoreComponent;
  let fixture: ComponentFixture<ByScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
