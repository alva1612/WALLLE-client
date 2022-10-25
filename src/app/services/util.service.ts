import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Dificultad } from '../Models/dificultad';
import { Estado } from '../Models/estado';
import { Trabajador } from '../Models/trabajador';
import { Urgencia } from '../Models/urgencia';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';

@Injectable({
    providedIn: 'root'
  })

export class UtilService {

    constructor(private http:HttpClient) { }
    
    listaDificultad():Observable<Dificultad[]>{
        return this.http.get<Dificultad[]>(baseUrlUtil+"/listaDificultad");
      }

    listaEstado():Observable<Estado[]>{
        return this.http.get<Estado[]>(baseUrlUtil+"/listaEstado");
      }

    listaTrabajador():Observable<Trabajador[]>{
        return this.http.get<Trabajador[]>(baseUrlUtil+"/listaTrabajador");
      }

    listaUrgencia():Observable<Urgencia[]>{
        return this.http.get<Urgencia[]>(baseUrlUtil+"/listaUrgencia");
      }
    

}