import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@app/services/auth.service'

var misc: any = {
  navbar_menu_visible: 0,
  active_collapse: true,
  disabled_collapse_init: 0,
}

declare var $: any
declare var swal: any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    if ($('body').hasClass('sidebar-mini')) {
      misc.sidebar_mini_active = true
    }

    $('#minimizeSidebar').click(function () {
      if (misc.sidebar_mini_active == true) {
        $('body').removeClass('sidebar-mini')
        misc.sidebar_mini_active = false
      } else {
        $('body').addClass('sidebar-mini')
        misc.sidebar_mini_active = true
      }
    })
  }

  onLogout() {
    swal({
      title: "Log Out?",
      text: "Are you sure you want to logout?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e5605b",
      confirmButtonText: "Logout",
    }).then(() => {
      this.authService.logout()
    }).catch(swal.noop)
  }
}
