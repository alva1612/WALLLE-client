import { Component, OnInit } from '@angular/core';
import { Ticket, Dificultad, Estado, Trabajador, Urgencia, Trabajador2, Rol  } from 'src/app/Models/Models';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-listado-trabajador',
  templateUrl: './listado-trabajador.component.html',
  styleUrls: ['./listado-trabajador.component.css']
})
export class ListadoTrabajadorComponent implements OnInit {

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




  constructor(private trabajadorService:TrabajadorService, private utilService:UtilService, private router: Router) {
 

    this.trabajadorService.listarTodos().subscribe((x) => {

      console.log(x)
      return this.trabajadores2 = x});

      this.utilService.listaRol().subscribe(
        response => this.roles = response
    );

  }

  actualiza(){
    console.log("ACTUALIZA TRABAJADOR")
    console.log(this.trabajador)
    this.trabajadorService.actualizaTrabajador(this.trabajador).subscribe(
        x => Swal.fire('Mensaje', x.mensaje,'info').then((result) => {
          if (result.isConfirmed) {
            this.trabajadorService.listarTodos().subscribe((x) => {
              return this.trabajadores2 = x});
          }
        })
    )
}

registra(){
  this.trabajadorService.registraTrabajador(this.trabajador).subscribe(
      x => Swal.fire('Mensaje', x.mensaje,'info').then((result) => {
        if (result.isConfirmed) {
          this.trabajadorService.listarTodos().subscribe((x) => {
            return this.trabajadores2 = x});
        }
      })
  )
  // this.router.navigate(['/mantenimientoTrabajador']);
}

busca(obj: Trabajador2){
  this.trabajador = obj;
}

limpiarForm(){
  this.trabajador = { 
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
}

  ngOnInit(): void {
  }




 










}
