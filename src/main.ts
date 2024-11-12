import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { ReservaformularioComponent } from './app/reservaformulario.component';
// import { HabitacionesComponent } from './app/habitaciones/habitaciones.component';

bootstrapApplication(ReservaformularioComponent, appConfig)
  .catch((err) => console.error(err));
