import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado, Ticket } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-encargado-main',
  templateUrl: './encargado-main.component.html',
  styleUrls: ['./encargado-main.component.css']
})
export class EncargadoMainComponent implements OnInit {
  data:Ticket[] = [];
  estado:Estado[] = [];
  constructor(private ticketService:TicketService, private router: Router) { 
    this.ticketService.listar().subscribe((x) => {
      return this.data = x});
  }

  consultaTicket() {
    this.ticketService.listar().subscribe((x) => {
      return this.data = x}
    );
  }

  cambiaEstado(idEstado: number, idTicket: number){
    Swal.fire({
      title: "¿Quieres cambiar el estado del ticket?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if(result.isConfirmed) {
        this.ticketService.cambiaEstadoPorTicket(idEstado, idTicket).subscribe(
          x =>{
            Swal.fire('Mensaje', 'Se acaba de cambiar el estado del ticket correctamente', 'info')
            this.consultaTicket()
            x = this.data
          } 
        )
      }
      else {
        this.consultaTicket()
      }
    })
    
   }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['idTicket','trabajador', 'titulo', 'descripcion', 'opciones', 'borrar'];

  navigateToDetail(id:number){
    this.router.navigate(['/detalleTicket/' + id]);
  }
}