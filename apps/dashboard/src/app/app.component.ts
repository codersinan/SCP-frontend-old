import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'dashboard-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(
    swUpdate: SwUpdate,
    translocoService: TranslocoService,
    @Inject(PLATFORM_ID) platformId
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

    }
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(() => window.location.reload());
    }
  }
}
