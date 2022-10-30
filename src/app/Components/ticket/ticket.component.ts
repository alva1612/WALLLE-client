import { Component, OnInit } from '@angular/core';
import { Dificultad, Estado, Ticket, Trabajador, Urgencia } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {

  estados: Estado[] = [];
  trabajadores: Trabajador[] = [];
  urgencias: Urgencia[] = [];
  dificultades: Dificultad[] = [];

  ticket: Ticket = {
    estado: {
      id_estado: 1
    } as Estado,
    trabajador: {
      id_trabajador: 1
    } as Trabajador,
    urgencia: {
      id_urgencia: 1
    } as Urgencia,
    dificultad: {
      id_dificultad: 1
    } as Dificultad,
    id_ticket: 0
  }

  constructor(private ticketService: TicketService, private utilService: UtilService) {

    utilService.listaEstado().subscribe(x => {
      this.estados = x;

    })

    utilService.listaTrabajador().subscribe(x => {

      this.trabajadores = x;

    })

    utilService.listaUrgencia().subscribe(x => {

      this.urgencias = x;

    })

    utilService.listaDificultad().subscribe(x => {

      this.dificultades = x;
    })


  }

  registraTicket() {

    console.log(this.ticket),
      this.ticketService.registrar(this.ticket).subscribe(



        x => {
          Swal.fire({
            icon: 'info',
            title: 'Resultado del Registro',
            text: x.errores,
          })
        },
      );
  }

  ngOnInit(): void {
  }

}
