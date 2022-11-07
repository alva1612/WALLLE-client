import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-ticket',
  templateUrl: './detalle-ticket.component.html',
  styleUrls: ['./detalle-ticket.component.css']
})
export class DetalleTicketComponent implements OnInit {

  ticket: Ticket = {}

  constructor(private activateRoute: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.traerTicker(id);
  }

  traerTicker(id:any){
    this.ticketService.buscarPorId(id).subscribe((x) => {
      if(id === null || id === undefined){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al intentar cargar el ticket',
        })
      } else {
        this.ticket = x;
      }
    })
  }
}
