import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'reservar',
    loadComponent: () => import('./reservar/reservar.component').then(m => m.ReservarComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'registrarse',
    loadComponent: () => import('./crear-cuenta/crear-cuenta.component').then(m => m.CrearCuentaComponent)
  },
];
