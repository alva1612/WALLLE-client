import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnInit {

  @Input() estrellas: number = 0
  arrStars: any[] = [1,2,3,4,5]
  startHovered: number = 0
  @Output() changeStar: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  calculateHoverEffect(number: number) {
    this.startHovered = number
  }
  resetHoverEffect() {
    this.startHovered = 0
  }
  changeStarSelected(number:number) {
    this.estrellas = number
    this.changeStar.emit(number)
  }
}
