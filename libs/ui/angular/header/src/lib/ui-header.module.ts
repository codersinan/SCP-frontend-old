import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './header/header.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { ProfileComponent } from './profile/profile.component';

import { TranslocoModule, TRANSLOCO_SCOPE } from "@ngneat/transloco";

import { scopeLoader } from "@scp/translate/transloco";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
  ],
  declarations: [
    HeaderComponent,
    ProfileDropdownComponent,
    ProfileComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'i18n', loader: scopeLoader((lang, root) => import(`../${root}/${lang}.json`))
      }
    }
  ]
})
export class UiHeaderModule { }
