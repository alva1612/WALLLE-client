import { Component, OnInit } from '@angular/core';
import { Ticket, Dificultad, Estado, Trabajador, Urgencia  } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';



import Swal from 'sweetalert2'

@Component({
  selector: 'app-listado-ticket',
  templateUrl: './listado-ticket.component.html',
  styleUrls: ['./listado-ticket.component.css']
})
export class ListadoTicketComponent implements OnInit {


  trabajadores: Trabajador[] = [];
  data:Ticket[] = [

    
  ];

  seleccionados:number = 1;

     //
    //  dificultad: string[] = [];;
    //  estado: string[] = [];;
    //  urgencia: string[] = [];;
    //  trabajador: string[] = [];;
    


  constructor(private ticketService:TicketService,  private utilService:UtilService, private router: Router) { 
    this.ticketService.listar().subscribe((x) => {
      console.log("data")
      console.log(x)
      // console.log(this.data = x)
      return this.data = x});

      utilService.listaTrabajador().subscribe(t => {

        this.trabajadores = t;
  
      })
  }

  ngOnInit(): void {
  }

   //Json para registrar o actualizar
  //  ticket: Ticket = { 
    
  // };


  ticket: Ticket = { 
    id_ticket: 0,
    idTicket: 0,
	trabajador :  {
    id_trabajador: -1,
    id_rol:"",
    documento:"",
    nombres:"",
    apellidos:"",
    correo:"",
    descripcion:"",
    usuario:"",
    password:"",

  },
    usuario :  {
      id_trabajador: -1,
    id_rol:"",
    documento:"",
    nombres:"",
    apellidos:"",
    correo:"",
    descripcion:"",
    usuario:"",
    password:"",
    },
	estado:{
    id_estado: -1,
    descripcion:"",
  },
    urgencia :{
      id_urgencia: -1,
      descripcion:"",
    },
	dificultad :{
    id_dificultad: -1,
    descripcion:"",
  },
	titulo : "",
	descripcion : "",
	equipo : "",
	estrellas :0,
	opinion : "",
  };

  navigateToDetail(obj:Ticket){
    this.router.navigate(['/detalleTicket/' + obj.idTicket]);
  }
  
  busca(obj: Ticket){

    this.ticket = obj;
    console.log(">>> busca >> " + this.ticket.titulo);

}



actualiza3(obj: Ticket){
  console.log(this.ticket.trabajador!.id_trabajador + "hasta" + obj.idTicket + "desde" + this.seleccionados );

  this.ticketService.actualizarTrabajador(this.ticket.trabajador!.id_trabajador, !obj.idTicket?  -1 : obj.idTicket ).subscribe(
      x => {
            // document.getElementById("btn_act_cerrar")?.click(); 
            Swal.fire('Mensaje', x.mensaje,'info');
            this.ticketService.listar().subscribe((x) => {
              console.log("data")
              console.log(x)
              // console.log(this.data = x)
              return this.data = x});

              this.ticket.trabajador!.id_trabajador = -1
      
        }
        
  )
}











}
