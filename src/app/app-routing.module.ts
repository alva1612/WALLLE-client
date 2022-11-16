import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EncargadoMainComponent } from './Components/encargado/encargado-main/encargado-main.component';
import { IndexComponent } from './Components/index/index.component';
import { AgregarTicketComponent } from './Components/ticket/agregar-ticket/agregar-ticket.component';
import { DetalleTicketComponent } from './Components/ticket/detalle-ticket/detalle-ticket.component';
import { ListadoTicketComponent } from './Components/ticket/listado-ticket/listado-ticket.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: ListadoTicketComponent},
  {path: 'agregarTicket', component: AgregarTicketComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'detalleTicket/:id', component: DetalleTicketComponent },
  {path: 'encargado/encargado-main', component: EncargadoMainComponent},
  {path: 'listadoTicket', component: ListadoTicketComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
