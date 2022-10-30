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

  baseUrlTicket = AppSettings.API_ENDPOINT + '/ticket';

  constructor(private http: HttpClient) { }


  registrar(data: Ticket): Observable<any> {
    return this.http.post(baseUrlAutor, data);
  }

  listar(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrlAutor + '/porEstado/1');
  }

  listaTicketPorEstado(idEstado: number): Observable<any> {
    const params = new HttpParams().set("idEstado", idEstado);
    return this.http.get(this.baseUrlTicket + "/porFiltro", { params });
  }

}
