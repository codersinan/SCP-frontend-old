import { Component, OnInit } from '@angular/core';
import { OAuthService, OAuthErrorEvent } from 'angular-oauth2-oidc';

@Component({
  selector: 'dashboard-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private authService: OAuthService) {
    authService.initLoginFlow();
  }

  ngOnInit(): void {
    // this.authService.initLoginFlow()
  }

}
