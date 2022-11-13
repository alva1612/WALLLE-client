import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IndexComponent } from './Components/index/index.component';
import { HeaderComponent } from './Components/partials/header/header.component';
import { FooterComponent } from './Components/partials/footer/footer.component';
import { EncargadoMainComponent } from './Components/encargado/encargado-main/encargado-main.component';

import { TicketComponent } from './Components/ticket/ticket.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

import { SideMenuComponent } from './Components/partials/side-menu/side-menu.component';

import { MatSelectModule } from '@angular/material/select';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';
// import { ConsultaTickerEstadoComponent } from './components/consulta-ticker-estado/consulta-ticker-estado.component';
import { EncargadoModule } from './Components/encargado/encargado.module';
import { CambiarEstadoTicketComponent } from './Components/cambiar-estado-ticket/cambiar-estado-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    TicketComponent,
    CambiarEstadoTicketComponent
    // ConsultaTickerEstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    EncargadoModule,
    ReactiveFormsModule

  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
