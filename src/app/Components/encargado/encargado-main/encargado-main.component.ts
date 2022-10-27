import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Nashee', weight: 20.1797, symbol: 'Ne'},
];


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
  dataSource = ELEMENT_DATA;

}
