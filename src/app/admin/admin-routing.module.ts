import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from '@app/admin/admin-dashboard/admin-dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
