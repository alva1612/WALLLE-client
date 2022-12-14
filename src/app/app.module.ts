import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './Components/partials/header/header.component';
import { FooterComponent } from './Components/partials/footer/footer.component';
import { EncargadoMainComponent } from './Components/encargado/encargado-main/encargado-main.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { SideMenuComponent } from './Components/partials/side-menu/side-menu.component';

import { MatSelectModule } from '@angular/material/select';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { DetalleTicketComponent } from './Components/ticket/detalle-ticket/detalle-ticket.component';
import { AgregarTicketComponent } from './Components/ticket/agregar-ticket/agregar-ticket.component';
import { EncargadoModule } from './Components/encargado/encargado.module';
import { ListadoTicketComponent } from './Components/ticket/listado-ticket/listado-ticket.component';
import { RegisterFeedbackComponent } from './Components/register-feedback/register-feedback.component';
import { EstrellasComponent } from './Components/register-feedback/estrellas/estrellas.component';
import { ListadoTrabajadorComponent } from './Components/listado-Trabajador/listado-trabajador.component';
import { BotComponent } from './Components/bot/bot.component';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    DetalleTicketComponent,
    AgregarTicketComponent,
    ListadoTicketComponent,
    RegisterFeedbackComponent,
    EstrellasComponent,
    ListadoTrabajadorComponent,
    BotComponent
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
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
