import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTicketComponent } from './detalle-ticket.component';

describe('DetalleTicketComponent', () => {
  let component: DetalleTicketComponent;
  let fixture: ComponentFixture<DetalleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
