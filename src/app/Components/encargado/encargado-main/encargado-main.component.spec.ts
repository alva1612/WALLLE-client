import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoMainComponent } from './encargado-main.component';

describe('EncargadoMainComponent', () => {
  let component: EncargadoMainComponent;
  let fixture: ComponentFixture<EncargadoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncargadoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncargadoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
