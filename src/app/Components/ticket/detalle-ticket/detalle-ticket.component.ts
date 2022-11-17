import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estado, Ticket } from 'src/app/Models/Models';
import { TokenService } from 'src/app/security/token.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-ticket',
  templateUrl: './detalle-ticket.component.html',
  styleUrls: ['./detalle-ticket.component.css']
})
export class DetalleTicketComponent implements OnInit {

  ticket: Ticket = {}
  estados: Estado[] = []
  selectedState: Estado = {} as Estado
  ableToChangeState: boolean = false
  constructor(
    private activateRoute: ActivatedRoute,
    private ticketService: TicketService,
    private _utilService: UtilService,
    private _tokenService: TokenService
    ) {
      console.log(_tokenService.roles)
      if (_tokenService.roles.some(rol => rol.toLowerCase()==='administrador'))
        this.ableToChangeState = true
    }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.traerTicker(id);

    this._utilService.listaEstado().subscribe(estados => {
      this.estados = estados
    })
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
        this.selectedState.id_estado = Number(this.ticket.estado?.id_estado)?? 0
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

  changeSelectedState() {
    const selected = document.getElementById('estado') as HTMLSelectElement
    this.selectedState.id_estado = Number(selected.value)
  }

  changeTicketState() {
    this.ticketService.cambiaEstadoPorTicket(this.selectedState.id_estado, this.ticket.idTicket ?? -1)
      .subscribe((res: any) => {
        Swal.fire(res.mensaje)
      })
  }
}
