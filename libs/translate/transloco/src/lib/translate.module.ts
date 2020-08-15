import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_MISSING_HANDLER
} from '@ngneat/transloco';

import { TranslocoHttpLoader } from './transloco-http-loader';
import { CustomMissingHandler } from './transloco-missing-handler';

@NgModule({
  exports: [TranslocoModule],
  imports: [HttpClientModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en'],
        defaultLang: 'en',
        fallbackLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        // prodMode: environment.production,
        failedRetries: 1,
        missingHandler: {
          allowEmpty: true
        }
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    { provide: TRANSLOCO_MISSING_HANDLER, useClass: CustomMissingHandler },
  ]
})
export class TranslateModule { }
