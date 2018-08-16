import { Component, OnInit } from '@angular/core'
import { RouteInfo } from '@app/layout/sidebar/sidebar.metadata'
import { SideBarRoute } from '@app/layout/sidebar/sidebar-routes.config'

declare var $: any

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[]

  constructor() { }

  ngOnInit() {
   
    this.menuItems = SideBarRoute.filter(menuItem => menuItem.user = 'admin')
  }

}
