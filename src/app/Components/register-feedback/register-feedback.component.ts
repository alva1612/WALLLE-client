import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
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
    estrellas: 0
  } as Feedback

  constructor(private _ticketService: TicketService) { }

  ngOnInit(): void {
  }

  onChangeStar(number:number) {
    this.feedback.estrellas = number
  }

  registerFeedback() {
    console.log('envio')
    const ticket: HTMLInputElement = document.getElementById('ticket')! as HTMLInputElement
    const idTicket = Number(ticket.value)
    const opinion = document.getElementById('opinion')! as HTMLInputElement
    const opinionValue = opinion.value
    this._ticketService.registrarFeedback(idTicket, this.feedback.estrellas, opinionValue).subscribe(res => {
      console.log(res)
      Swal.fire(res.mensaje)
    })
  }
}
