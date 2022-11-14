import { Component, OnInit } from '@angular/core';
import { Ticket, Dificultad, Estado, Trabajador, Urgencia  } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';



import Swal from 'sweetalert2'

@Component({
  selector: 'app-listado-ticket',
  templateUrl: './listado-ticket.component.html',
  styleUrls: ['./listado-ticket.component.css']
})
export class ListadoTicketComponent implements OnInit {



  data:Ticket[] = [
  
    
  ];
  
  estado:Estado[] = []
     //
    //  dificultad: string[] = [];;
    //  estado: string[] = [];;
    //  urgencia: string[] = [];;
    //  trabajador: string[] = [];;
    


  constructor(private ticketService:TicketService,  private utilService:UtilService) { 
    this.ticketService.listar().subscribe((x) => {
      console.log("data")
      console.log(x)
      // console.log(this.data = x)
      return this.data = x});
      this.consultaEstado();
  }

  consultaTicket(){
    this.ticketService.listar().subscribe((x) => {
      console.log("data")
      console.log(x)
      // console.log(this.data = x)
      return this.data = x});
      this.consultaEstado();
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

  
  busca(obj: Ticket){

    this.ticket = obj;
    console.log(">>> busca >> " + this.ticket.titulo);

}

actualiza(){
  console.log(">>> actualiza >> "+ this.ticket.trabajador!.id_trabajador);
  this.ticketService.actualizarTrabajador(this.ticket).subscribe(
      x => {
            document.getElementById("btn_act_cerrar")?.click(); 
            Swal.fire('Mensaje', x.mensaje,'info');
            // this.docenteService.consultaDocente(this.filtro==""?"todos":this.filtro).subscribe(
            //     x => this.docentes = x
            // ); 
        }
  )
}

consultaEstado(){
  this.utilService.listaEstado().subscribe((x) => {
    return this.estado = x}
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









}
