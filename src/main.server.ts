import { bootstrapApplication } from '@angular/platform-browser';
//import { ReservaformularioComponent } from './app/reservaformulario.component';
// import { HabitacionesComponent } from './app/habitaciones/habitaciones.component';
import { config } from './app/app.config.server';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
