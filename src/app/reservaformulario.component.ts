import { Component, signal } from '@angular/core';
import { Tipo } from './tipo.model';

@Component({
  selector: 'app-reservaformulario',
  standalone: true,
  imports: [],
  templateUrl: './reservaformulario.component.html',
  styleUrl: './reservaformulario.component.css'
})
export class ReservaformularioComponent {
  tipos: Tipo[] = [
    { id: BigInt(1), nombre: 'basica', capacidad: 2, precio: 22},
    { id: BigInt(2), nombre: 'deluxe', capacidad: 4, precio: 55}, 
    { id: BigInt(3), nombre: 'premium', capacidad: 6, precio: 80}
  ];
  listaTipo = signal(this.tipos);

}
