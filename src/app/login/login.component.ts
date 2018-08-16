import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

declare var $: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorResponse: any

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
  }

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  onLogin() {
    this.router.navigate(['/admin/dashboard'])
  }
}
