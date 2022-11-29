import { Component, OnInit } from '@angular/core';
import { Ticket, Dificultad, Estado, Trabajador, Urgencia, Trabajador2, Rol  } from 'src/app/Models/Models';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-listado-trabajador',
  templateUrl: './listado-trabajador.component.html',
  styleUrls: ['./listado-trabajador.component.css']
})
export class ListadoTrabajadorComponent implements OnInit {

  
  // public id:number = -1;

  trabajadores2: Trabajador2[] = [];


  roles: Rol[] = [];
 

  trabajador: Trabajador2 = { 
    id_trabajador:0,
    rol:{

      idRol: -1,
      descripcion:"",
    
    },
    documento:"",
    nombres:"",
    apellidos:"",
    correo:"",
    descripcion:"",
    usuario:"",
    password:""
  
  };

  // data:Ticket[] = [];

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  submitted = false;

  formsRegistra = new FormGroup({
    validaNombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,30}')]),
    validaApellido: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,40}')]),
    validaDNI: new FormControl('', [Validators.required,Validators.pattern('[0-9]{8}')]),
    validaCorreo: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    validaDescripcion: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,100}')]),
    validaIniciales: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,3}')]),
    validaContrasena: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,30}')]),
    validaRol: new FormControl('', [Validators.min(1)]),
});

formsActualiza  = new FormGroup({
  validaNombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,30}')]),
  validaApellido: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,40}')]),
  validaDNI: new FormControl('', [Validators.required,Validators.pattern('[0-9]{8}')]),
  validaCorreo: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
  validaDescripcion: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,100}')]),
  validaIniciales: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{1,4}')]),
  // validaContrasena: new FormControl('', [Validators.required,Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,30}')]),
  validaRol: new FormControl('', [Validators.min(1)]),
});




  constructor(private trabajadorService:TrabajadorService, private utilService:UtilService, private router: Router) {
 

    this.trabajadorService.listarTodos().subscribe((x) => {

    
      return this.trabajadores2 = x});

      this.utilService.listaRol().subscribe(
        response => this.roles = response
    );

  }

  actualiza(){

    console.log(">>> actualiza >> ");
    console.log(this.trabajador)

    this.submitted = true;

    if (this.formsActualiza.invalid) {
     return;
   }
   this.submitted = false;

    this.trabajadorService.actualizaTrabajador(this.trabajador).subscribe(

        x => Swal.fire('Mensaje', x.mensaje,'info')

        

    )

    this.router.navigate(['/mantenimientoTrabajador']);
   

  

}

registra(){

  this.submitted = true;

  //finaliza el método si hay un error
  if (this.formsRegistra.invalid){
       return;
  }

  this.submitted = false;
  console.log(">>> registra >> ");
  console.log(this.trabajador)

  this.trabajadorService.registraTrabajador(this.trabajador).subscribe(

      x => Swal.fire('Mensaje', x.mensaje,'info')

      

  )

  this.router.navigate(['/mantenimientoTrabajador']);
 



}

busca(obj: Trabajador2){


  console.log(obj)

  this.trabajador = obj;

  this.utilService.listaRol().subscribe(
    response => this.roles = response
);  
  
  // this.ubigeoService.listaProvincias(this.docente.ubigeo?.departamento).subscribe(
  //   response =>  this.provincias= response
  // );

  // this.ubigeoService.listaDistritos(this.docente.ubigeo?.departamento, this.docente.ubigeo?.provincia).subscribe(
  //   response =>  this.distritos= response
  //  );
}

  ngOnInit(): void {
  }




 










}
