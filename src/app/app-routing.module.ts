import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ScheduleComponent} from './schedule/schedule.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: '', pathMatch: 'full',  redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
