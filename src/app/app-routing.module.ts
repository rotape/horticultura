import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'calendari', loadComponent: () => import('./calendari/calendari.component').then((m) => m.CalendariComponent) },
  { path: 'fitoterapia', loadComponent: () => import('./fitoterapia/fitoterapia.component').then((m) => m.FitoterapiaComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
