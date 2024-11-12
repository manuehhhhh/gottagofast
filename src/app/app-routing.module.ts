import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { DatePickerComponent } from './fecha/fecha.component';
//import { PaymentComponent } from './pago/pago.component';
import { ReservationConfirmationComponent } from './confirmacion-reserva/confirmacion-reserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
//  { path: 'fecha', component: DatePickerComponent },
//  { path: 'pago', component: PaymentComponent },
  { path: 'confirmacion-reserva', component: ReservationConfirmationComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: '/', redirectTo: '/habitaciones', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
