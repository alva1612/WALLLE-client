import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';

const baseUrlTicket = AppSettings.API_ENDPOINT+ '/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  listaTicket(idEstado:number): Observable<any>{
    const params = new HttpParams().set("idEstado", idEstado);
    return this.http.get(baseUrlTicket +"/porFiltro" , {params});
  }

}
