import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/Models';

const baseUrlAutor = AppSettings.API_ENDPOINT + '/tickets';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  baseUrlTicket = AppSettings.API_ENDPOINT + '/tickets';

  constructor(private http: HttpClient) { }


    buscarPorId(idTicket:number):Observable<any>{
      return this.http.get(baseUrlAutor + '/buscarPorId/' + idTicket);
    }

  registrar(data: Ticket): Observable<any> {
    return this.http.post(baseUrlAutor, data);
  }

  listar(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrlAutor + '/listarPorEstado/1');
  }

  listaTicketPorEstado(idEstado: number): Observable<any> {
    const params = new HttpParams().set("idEstado", idEstado);
    return this.http.get(this.baseUrlTicket + `/listarPorEstado/${idEstado}`);
  }

  actualizarTrabajador(id_trabajador:number, idticket:number): Observable<any>{
    return this.http.get(this.baseUrlTicket + "/actualizarTrabajadores/" + id_trabajador + "/" + idticket)
  }

}
