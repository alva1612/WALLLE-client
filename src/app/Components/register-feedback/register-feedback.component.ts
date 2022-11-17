import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/Models/Models';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-feedback',
  templateUrl: './register-feedback.component.html',
  styleUrls: ['./register-feedback.component.css']
})
export class RegisterFeedbackComponent implements OnInit {

  feedback: Feedback = {
    id_ticket: 0,
    estrellas: 0
  } as Feedback

  constructor(
    private _ticketService: TicketService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        console.log(params)
        this.feedback.id_ticket = params['id'];

        const ticket: HTMLInputElement = document.getElementById('ticket')! as HTMLInputElement
        ticket.value = this.feedback.id_ticket.toString()
      })
  }

  onChangeStar(number:number) {
    this.feedback.estrellas = number
  }

  registerFeedback() {
    console.log('envio')
    const ticket: HTMLInputElement = document.getElementById('ticket')! as HTMLInputElement
    const idTicket = Number(ticket.value)
    this.feedback.id_ticket = idTicket
    const opinion = document.getElementById('opinion')! as HTMLInputElement
    const opinionValue = opinion.value
    this._ticketService.registrarFeedback(this.feedback.id_ticket, this.feedback.estrellas, opinionValue).subscribe(res => {
      console.log(res)
      Swal.fire(res.mensaje)
    })
  }
}
