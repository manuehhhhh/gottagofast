import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacion-reserva.component.html',
  styleUrls: ['./confirmacion-reserva.component.css']
})
export class ReservationConfirmationComponent {
  @Input() reservationDetails: any;
}