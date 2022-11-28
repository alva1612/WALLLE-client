import { Component, OnInit } from '@angular/core';
import { Ticket, Dificultad, Estado, Trabajador, Urgencia  } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';



import Swal from 'sweetalert2'
import { TokenService } from 'src/app/security/token.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  showBot: boolean = false

  constructor(
    private ticketService:TicketService,
    private utilService:UtilService,
    private router: Router,
    private _tokenService: TokenService
    ) {

  }

  ngOnInit(): void {
  }

  toggleBot() {
      this.showBot = !this.showBot
  }


  };




