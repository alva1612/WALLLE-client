import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/models/estado';
import { Ticket } from 'src/app/models/ticket';
import { EstadoService } from 'src/app/services/estado.service';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-ticker-estado',
  templateUrl: './consulta-ticker-estado.component.html',
  styleUrls: ['./consulta-ticker-estado.component.css']
})
export class ConsultaTickerEstadoComponent implements OnInit {


   selEstado:number = -1;

   estado: Estado[]  = [];

   //Grila
   ticket: Ticket[] = [];


  constructor(private estadoService: EstadoService,private ticketService:TicketService) {
    this.estadoService.listaEstado().subscribe(
          x => this.estado = x
    );
  }

  consultaTicket() {
    this.ticketService.listaTicket(this.selEstado).subscribe(
      x => {
        this.ticket = x.lista;
        Swal.fire('Mensaje',x.mensaje,'info');
      }
    );

  }

  ngOnInit(): void {
  }

}
