import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-encargado-main',
  templateUrl: './encargado-main.component.html',
  styleUrls: ['./encargado-main.component.css']
})
export class EncargadoMainComponent implements OnInit {

  data:Ticket[] = [];

  constructor(private ticketService:TicketService, private router: Router) { 
    this.ticketService.listar().subscribe((x) => {
      return this.data = x});
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['idTicket','trabajador', 'titulo', 'descripcion'];

  navigateToDetail(id:number){
    this.router.navigate(['/detalleTicket/' + id]);
  }

}
