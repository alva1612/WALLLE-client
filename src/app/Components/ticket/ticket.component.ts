import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/Models/trabajador';
import { Estado } from 'src/app/Models/estado';
import { Urgencia } from 'src/app/Models/urgencia';
import { Dificultad } from 'src/app/Models/dificultad';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
  })

  export class TicketComponent implements OnInit{

    estados: Estado[] = [];
    trabajadores: Trabajador[] = [];
    urgencias: Urgencia[] = [];
    dificultades: Dificultad[] = [];

  ticket: Ticket ={
    estado:{
        id_estado:-1
      },
      trabajador:{
        id_trabajador:-1
      },
      urgencia:{
        id_urgencia:-1
      },
      dificultad:{
        id_dificultad:-1
      }

  }

  constructor(private ticketService:TicketService , private utilService: UtilService) { 

    utilService.listaEstado().subscribe(x=>{
      this.estados=x;
  
    })

    utilService.listaTrabajador().subscribe(x=>{

      this.trabajadores=x;
 
    })

    utilService.listaUrgencia().subscribe(x=>{
   
      this.urgencias=x;
 
    })

    utilService.listaDificultad().subscribe(x=>{

      this.dificultades=x;
    })


    }

    registraTicket(){

      console.log(this.ticket),
        this.ticketService.registrar(this.ticket).subscribe(

          

          x=>{
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