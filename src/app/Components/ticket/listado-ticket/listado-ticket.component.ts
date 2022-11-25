import { Component, OnInit } from '@angular/core';
import { Ticket, Dificultad, Estado, Trabajador, Urgencia  } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';



import Swal from 'sweetalert2'
import { TokenService } from 'src/app/security/token.service';

@Component({
  selector: 'app-listado-ticket',
  templateUrl: './listado-ticket.component.html',
  styleUrls: ['./listado-ticket.component.css']
})
export class ListadoTicketComponent implements OnInit {

  eliminar = false;

  // public id:number = -1;

  trabajadores: Trabajador[] = [];
  estados: Estado[] = [];
  data:Ticket[] = [];

  data2:Ticket[] = [];
  isAdmin: boolean = false;
  seleccionados:number = 1;

  idtrabajador:number =  0;

     //
    //  dificultad: string[] = [];;
    //  estado: string[] = [];;
    //  urgencia: string[] = [];;
    //  trabajador: string[] = [];;



  constructor(
    private ticketService:TicketService,
    private utilService:UtilService,
    private router: Router,
    private _tokenService: TokenService
    ) {
    this.isAdmin = this._tokenService.getAuthorities().some(rol => rol === 'administrador')


    let id =  sessionStorage.getItem('AuthUserId');

      // !id? sessionStorage.getItem('AuthUserId') : sessionStorage.getItem('AuthUserId') ;


    this.ticketService.listar(!id?  "0" : id).subscribe((x) => {


      return this.data = x});

      utilService.listaTrabajador().subscribe(t => {

        this.trabajadores = t;

      })

      utilService.listaEstado().subscribe(e => {

        this.estados = e;

      })

      if(id == "6"){
        this.eliminar = true;
      }
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

  //prueba
  ticket2: Ticket = {
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
    id_estado: 1,
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

  Swal.fire({
    title: 'Mensaje',
    text: "¿Desea Asignar este ticket a este Trabajador?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, Asignar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

  this.ticketService.actualizarTrabajador(this.ticket.trabajador!.id_trabajador, !obj.idTicket?  -1 : obj.idTicket ).subscribe(
      x => {

        let id =  sessionStorage.getItem('AuthUserId');
            // document.getElementById("btn_act_cerrar")?.click();
            Swal.fire('Mensaje', x.mensaje,'info');
            this.ticketService.listar(!id?  "0" : id).subscribe((x) => {
              console.log("data")
              console.log(x)
              // console.log(this.data = x)
              return this.data = x});

              this.ticket.trabajador!.id_trabajador = -1

        }

  )

}
})

}

consulta(){

  const id =  sessionStorage.getItem('AuthUserId');

   this.idtrabajador = id !== null ? parseFloat(id) : 0;

  // this.ticket.trabajador!.id_trabajador
// console.log("prueba" + this.idtrabajador)

  // console.log(">>> consulta >> " + this.ticket2.trabajador!.id_trabajador == -1 ? this.idtrabajador : this.ticket2.trabajador!.id_trabajador  + " este sera el idestado = " + this.ticket2.estado!.id_estado);

  this.ticketService.listarTrabajadorEstado(this.ticket2.trabajador!.id_trabajador == -1 ? this.idtrabajador : this.ticket2.trabajador!.id_trabajador  , this.ticket2.estado!.id_estado).subscribe(x => {

    this.data2 = x

    Swal.fire('Mensaje', 'Se tiene ' +  x.length + ' registros' ,'info');

    return this.data = x}


    );
}

elimina(obj :Ticket){
  console.log(">>> elimina >> ");

  Swal.fire({
    title: 'Mensaje',
    text: "¿Desea eliminar?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, elimine',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
          this.ticketService.eliminaDocente(obj.idTicket || 0).subscribe(

            x => {

              let id =  sessionStorage.getItem('AuthUserId');
                  // document.getElementById("btn_act_cerrar")?.click();
                  Swal.fire('Mensaje', x.mensaje,'info');
                  this.ticketService.listar(!id?  "0" : id).subscribe((x) => {

                    return this.data = x});

                    this.ticket.trabajador!.id_trabajador = -1

              }
          );
    }
  })


}










}
