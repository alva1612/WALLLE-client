import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/Models/Models';
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
        console.log(x)
        this.ticket = x;
      }
    })
  }

  formatDate(date:string | undefined) {
    if(date === undefined){
      return ""
    }
    const MESES = [
      "Ene.",
      "Feb.",
      "Mar.",
      "Abr.",
      "May.",
      "Jun.",
      "Jul.",
      "Ago.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dic.",
    ];
    var dateString = new Date(date);
    return (
      "" +
      dateString.getUTCDate() +
      " de " +
      MESES[dateString.getUTCMonth()] +
      " " +
      dateString.getUTCFullYear() +
      " a las " +
      this.formatAMPM(dateString)
    );
  }

  formatAMPM(date: Date) {
    var hours = date.getUTCHours();
    var minutes: number | string = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
}
