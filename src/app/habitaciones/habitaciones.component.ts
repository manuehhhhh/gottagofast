import { Component, signal } from '@angular/core';
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
    { id: BigInt(1), numeroHabitacion: 101, estado: 'ocupada', tipo: BigInt(1) },
    { id: BigInt(2), numeroHabitacion: 102, estado: 'ocupada', tipo: BigInt(1)},
    { id: BigInt(3), numeroHabitacion: 103, estado: 'ocupada', tipo: BigInt(1)}
  ];

  lista = signal(this.habitaciones);
  seleccionada = signal(0);

  // seleccionarHabitacion(habitacion: Habitacion) {
  //   habitacion.seleccionada = !habitacion.seleccionada;
  // }
  seleccionHabitacion(e: Event, a:number){
    this.seleccionada.set(a);
  }
}