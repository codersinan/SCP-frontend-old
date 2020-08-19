import { Component, OnInit } from '@angular/core';

import { NavMenu } from "@scp/ui/angular/header";

@Component({
  selector: 'dashboard-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isOpen: boolean;
  leftMenu: NavMenu[] = [
    { name: 'Home',key:'home',icon:'', link: '/' },
    { name: 'Sign In',key:'sign-in',icon:'', link: '/auth/sign-in' },
    { name: 'Sign Up',key:'sign-up',icon:'', link: '/auth/sign-up' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
