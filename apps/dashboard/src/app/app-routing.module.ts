import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { TranslateModule } from '@scp/translate/transloco';
import { UiHeaderModule } from "@scp/ui/angular/header";

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forRoot(routes),
    UiHeaderModule,
  ],
  exports: [RouterModule],
  declarations: [WelcomeComponent],
})
export class AppRoutingModule { }
