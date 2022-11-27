import { Component, OnInit } from '@angular/core';
import { Ticket, Dificultad, Estado, Trabajador, Urgencia, Trabajador2  } from 'src/app/Models/Models';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-trabajador',
  templateUrl: './listado-trabajador.component.html',
  styleUrls: ['./listado-trabajador.component.css']
})
export class ListadoTrabajadorComponent implements OnInit {

  
  // public id:number = -1;

  trabajadores2: Trabajador2[] = [];
  // data:Ticket[] = [];




  constructor(


    private trabajadorService:TrabajadorService,
  
    ) {
    // this.isAdmin = this._tokenService.getAuthorities().some(rol => rol === 'administrador')


    // let id =  sessionStorage.getItem('AuthUserId');

      // !id? sessionStorage.getItem('AuthUserId') : sessionStorage.getItem('AuthUserId') ;


    this.trabajadorService.listarTodos().subscribe((x) => {

      console.log("1ero")
      console.log(x)

      return this.trabajadores2 = x});

      console.log("2do")
       console.log(this.trabajadores2)

    


  }

  ngOnInit(): void {
  }




 










}
