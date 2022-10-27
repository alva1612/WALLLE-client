import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './Components/index/index.component';
import { TicketComponent } from './Components/ticket/ticket.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: IndexComponent},
  {path: 'agregarTicket', component: TicketComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
