import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/ticket';

const baseUrlAutor = AppSettings.API_ENDPOINT+ '/tickets';

@Injectable({
    providedIn: 'root'
  })

  export class TicketService{

    constructor(private http:HttpClient) { }

    
    registrar(data:Ticket):Observable<any>{
        return this.http.post(baseUrlAutor, data);
      }

  }