import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExoneComponent } from './exone/exone.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ex1', component: ExoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
