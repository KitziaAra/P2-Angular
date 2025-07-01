import { Routes } from '@angular/router';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { HomeComponent } from './home/home.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { EventosFormComponent } from './eventos/eventos-form/eventos-form.component';

export const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'operaciones',component:OperacionesComponent},
  {path:'conversor',component:ConversionesComponent},
  {path:'directivas',component:DirectivasComponent},
  {path: 'eventos', component:EventoComponent},
  {path: 'eventosForm/:id', component:EventosFormComponent},
  {path: 'eventosForm', component:EventosFormComponent},

];
