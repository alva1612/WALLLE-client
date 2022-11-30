import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EncargadoMainComponent } from './Components/encargado/encargado-main/encargado-main.component';
import { RegisterFeedbackComponent } from './Components/register-feedback/register-feedback.component';
import { AgregarTicketComponent } from './Components/ticket/agregar-ticket/agregar-ticket.component';
import { DetalleTicketComponent } from './Components/ticket/detalle-ticket/detalle-ticket.component';
import { ListadoTicketComponent } from './Components/ticket/listado-ticket/listado-ticket.component';
import { ListadoTrabajadorComponent } from './Components/listado-Trabajador/listado-trabajador.component';
import { BotComponent } from './Components/bot/bot.component';
import { PageComponent } from './dashboard/page/page.component';
import { ByMonthComponent } from './dashboard/by-month/by-month.component';
import { ByScoreComponent } from './dashboard/by-score/by-score.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: ListadoTicketComponent},
  {path: 'agregarTicket', component: AgregarTicketComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'detalleTicket/:id', component: DetalleTicketComponent },
  {path: 'encargado/encargado-main', component: EncargadoMainComponent},
  {path: 'listadoTicket', component: ListadoTicketComponent},
  {path: 'feedback', component: RegisterFeedbackComponent},
  {path: 'mantenimientoTrabajador', component: ListadoTrabajadorComponent},
  {path: 'cliente', component: BotComponent},
  {
    path:'dashboard',
    component: PageComponent,
    children: [
      {path: 'por-mes', component: ByMonthComponent},
      {path: 'por-ranking', component: ByScoreComponent}
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
