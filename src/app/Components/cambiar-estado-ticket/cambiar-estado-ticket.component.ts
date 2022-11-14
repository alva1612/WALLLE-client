import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Estado, Ticket } from 'src/app/Models/Models';
import { TicketService} from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-estado-ticket',
  templateUrl: './cambiar-estado-ticket.component.html',
  styleUrls: ['./cambiar-estado-ticket.component.css']
})

export class CambiarEstadoTicketComponent implements OnInit {


    selEstado:number = -1;
 
    estado: Estado[]  = [];
 
    //Grila
    ticket: Ticket[] = [];
 
 
   constructor(private utilService: UtilService,private ticketService:TicketService) {
    this.utilService.listaEstado().subscribe(
           x => this.estado = x
     );
     this.consultaTicket()
   }
 
   consultaTicket() {
     this.ticketService.listar().subscribe(
       x => this.ticket = x
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
            x = this.ticket
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

   displayedColumns: string[] = ['idTicket', 'titulo', 'descripcion', 'equipo', 'estrellas', 'opinion', 'estado', 'cambiarEstado'];
   dataSource = this.ticket;
 
 }