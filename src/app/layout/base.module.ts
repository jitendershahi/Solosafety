import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { BaselayoutComponent } from '@app/layout/baselayout/baselayout.component'
import { SidebarComponent } from '@app/layout/sidebar/sidebar.component'
import { NavbarComponent } from '@app/layout/navbar/navbar.component'

export const routes: Routes = [
  {
    path: '',
    loadChildren: '@app/login/login.module#LoginModule'
  },
  {
    path: '',
    component: BaselayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: '@app/admin/admin.module#AdminModule'
      }
    ]
  }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SidebarComponent, NavbarComponent, BaselayoutComponent]
})
export class BaseModule { }
