import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-encargado-main',
  templateUrl: './encargado-main.component.html',
  styleUrls: ['./encargado-main.component.css']
})
export class EncargadoMainComponent implements OnInit {

  data:Ticket[] = [];

  constructor(private ticketService:TicketService) {
    this.ticketService.listar().subscribe((x) => {
      console.log("subscribe en listar")
      console.log(x)
      return this.data = x});
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['idTicket','trabajador', 'titulo', 'descripcion'];
  dataSource = this.data;

}
