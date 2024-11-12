import { bootstrapApplication } from '@angular/platform-browser';
import { HabitacionesComponent } from './app/habitaciones/habitaciones.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(HabitacionesComponent, config);

export default bootstrap;
