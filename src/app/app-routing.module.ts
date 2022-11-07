import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './Components/index/index.component';
import { AgregarTicketComponent } from './Components/ticket/agregar-ticket/agregar-ticket.component';
import { DetalleTicketComponent } from './Components/ticket/detalle-ticket/detalle-ticket.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: IndexComponent},
  {path: 'agregarTicket', component: AgregarTicketComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'detalleTicket/:id', component: DetalleTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
