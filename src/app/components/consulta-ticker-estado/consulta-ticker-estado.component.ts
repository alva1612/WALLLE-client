import { Component, OnInit } from '@angular/core';
import { Estado, Ticket } from 'src/app/Models/Models';
import { TicketService} from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
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


  constructor(private utilService: UtilService,private ticketService:TicketService) {
    this.utilService.listaEstado().subscribe(
          x => this.estado = x
    );
  }

  consultaTicket() {
    this.ticketService.listaTicketPorEstado(this.selEstado).subscribe(
      x => {
        this.ticket = x.lista;
        Swal.fire('Mensaje',x.mensaje,'info');
      }
    );

  }

  ngOnInit(): void {
  }

}
