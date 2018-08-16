import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: '@app/login/login.module#LoginModule'
  }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class BaseModule { }
