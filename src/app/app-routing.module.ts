import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartingComponent } from './starting/starting.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic', component: StartingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
