import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ConsultaTickerEstadoComponent } from './components/consulta-ticker-estado/consulta-ticker-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    ConsultaTickerEstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
