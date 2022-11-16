import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Dificultad, Estado, Ticket, Trabajador, Urgencia } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket',
  templateUrl: './agregar-ticket.component.html',
  styleUrls: ['./agregar-ticket.component.css']
})



export class AgregarTicketComponent implements OnInit {

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
  };

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //para verificar que e pulsó el boton
    submitted = false;

    formsRegistra = new FormGroup({
      validaTitulo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,40}')]),
      validaDescripcion: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,500}')]),
      validaEquipo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,30}')]),
      validaCorreo: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
 
  });
  

  constructor(private ticketService: TicketService, private utilService: UtilService) {

    // sessionStorage.setItem('prueba', 'no se')

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
    this.submitted = true;
    if (this.formsRegistra.invalid){
      return;
 }

 this.submitted = false;
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
