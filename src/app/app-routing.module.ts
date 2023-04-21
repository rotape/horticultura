import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendariComponent } from './calendari/calendari.component';

const routes: Routes = [
  {path: 'calendari', component: CalendariComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
