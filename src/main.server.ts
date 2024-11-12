import { bootstrapApplication } from '@angular/platform-browser';
import { ReservaformularioComponent } from './app/reservaformulario.component';
// import { HabitacionesComponent } from './app/habitaciones/habitaciones.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(ReservaformularioComponent, config);

export default bootstrap;
