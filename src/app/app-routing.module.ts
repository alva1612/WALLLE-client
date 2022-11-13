import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CambiarEstadoTicketComponent } from './Components/cambiar-estado-ticket/cambiar-estado-ticket.component';
// import { ConsultaTickerEstadoComponent } from './Components/consulta-ticker-estado/consulta-ticker-estado.component';
import { IndexComponent } from './Components/index/index.component';
import { TicketComponent } from './Components/ticket/ticket.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: IndexComponent},
  {path: 'agregarTicket', component: TicketComponent},
  {path: 'cambiarEstadoTicket', component: CambiarEstadoTicketComponent},

  // {path: 'ticketsPorEstado', component: ConsultaTickerEstadoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
