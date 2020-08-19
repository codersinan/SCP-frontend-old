import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TranslateModule } from "@scp/translate/transloco";

@NgModule({
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    TranslateModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${CoreModule.name} is already loaded. Import only in AppModule`);
    }
  }
}