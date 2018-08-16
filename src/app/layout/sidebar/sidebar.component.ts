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
    var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      var sidebar = $('.sidebar-wrapper')
      sidebar.perfectScrollbar()
    }
    this.menuItems = SideBarRoute.filter(menuItem => menuItem.user = 'admin')
  }

}
