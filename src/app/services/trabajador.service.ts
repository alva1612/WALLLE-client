import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador2 } from '../Models/Models';

const baseUrlTrabajador = AppSettings.API_ENDPOINT + '/trabajadores';

@Injectable({
  providedIn: 'root'
})

export class TrabajadorService {

  // baseUrlTrabajador = AppSettings.API_ENDPOINT + '/trabajadores';

  constructor(private http: HttpClient) { }




  listarTodos(): Observable<Trabajador2[]> {
    return this.http.get<Trabajador2[]>(baseUrlTrabajador + "/listarTodos");
  }

  actualizaTrabajador(trabajador :Trabajador2): Observable<any>{

    console.log(trabajador)
    return this.http.put(baseUrlTrabajador + "/actualizarTrabajador", trabajador);
  }

  registraTrabajador(trabajador :Trabajador2): Observable<any>{
    return this.http.post(baseUrlTrabajador + "/registrarTrabajador", trabajador);
  }




}
