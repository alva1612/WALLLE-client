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

  listar(id:string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrlAutor + "/listarPorEstadoTrabajador/1/" + id);
  }

  listarTrabajadorEstado(idtrabajador:number, idestado:number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrlAutor + "/listarPorEstadoTrabajador/" + idestado +"/" + idtrabajador);
  }

  listaTicketPorEstado(idEstado: number): Observable<any> {
    const params = new HttpParams().set("idEstado", idEstado);
    return this.http.get(this.baseUrlTicket + `/listarPorEstado/${idEstado}`);
  }

  actualizarTrabajador(id_trabajador:number, idticket:number): Observable<any>{
    return this.http.get(this.baseUrlTicket + "/actualizarTrabajadores/" + id_trabajador + "/" + idticket)
  }

  eliminaDocente(idTicket : number): Observable<any>{
    return this.http.delete(this.baseUrlTicket + "/eliminaTicket/" + idTicket);
  }


  registrarFeedback(idTicket: number, estrellas: number, opinion: string): Observable<any> {
    const params = new HttpParams()
      .append('id', idTicket)
      .append('star', estrellas)
      .append('opinion', opinion)
    return this.http.post(this.baseUrlTicket + "/actualizarOpinionEstrella", {}, {params})
  }

}
