import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { TranslocoService } from '@ngneat/transloco';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';

import { authCodeFlowConfig } from "./auth.config";
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks'
@Component({
  selector: 'dashboard-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(
    private swUpdate: SwUpdate,
    private translocoService: TranslocoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: OAuthService,
    private http: HttpClient,
  ) {
    if (platformId === 'browser') {
      let language = localStorage.getItem('lang');
      if (language) {
        translocoService.setActiveLang(language);
      } else {
        language = translocoService.getDefaultLang();
        translocoService.setDefaultLang(language);

        localStorage.setItem('lang', language);
      }

      // debugger;
      authService.configure(authCodeFlowConfig);
      authService.tokenValidationHandler = new JwksValidationHandler();
      authService.loadDiscoveryDocumentAndTryLogin();

    }
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(() => window.location.reload());
    }
  }
}
