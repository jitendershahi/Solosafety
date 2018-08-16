import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

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

  constructor(private router: Router) { }

  ngOnInit() {

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
      this.router.navigate([''])
    }).catch(swal.noop)
  }
}
