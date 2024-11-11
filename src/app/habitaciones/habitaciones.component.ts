import { Component } from '@angular/core';
import { Habitacion } from './habitacion.model';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [],
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {
  habitaciones: Habitacion[] = [
    { id: 1, nombre: 'Habitación 1', seleccionada: false, precio: 100 },
    { id: 2, nombre: 'Habitación 2', seleccionada: false, precio: 250},
    { id: 3, nombre: 'Habitación 3', seleccionada: false, precio: 200}
  ];

  seleccionarHabitacion(habitacion: Habitacion) {
    habitacion.seleccionada = !habitacion.seleccionada;
  }
}