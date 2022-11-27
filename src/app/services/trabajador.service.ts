import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador2 } from '../Models/Models';

const baseUrlTrabajador = AppSettings.API_ENDPOINT_MICRO + '/trabajadores';

@Injectable({
  providedIn: 'root'
})

export class TrabajadorService {

  // baseUrlTrabajador = AppSettings.API_ENDPOINT + '/trabajadores';

  constructor(private http: HttpClient) { }




  listarTodos(): Observable<Trabajador2[]> {
    return this.http.get<Trabajador2[]>(baseUrlTrabajador + "/listarTodos");
  }





}
