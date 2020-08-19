import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { TranslateModule } from '@scp/translate/transloco';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'welcome',pathMatch:'full'},
      { path: 'welcome', component: WelcomeComponent }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('@scp/layout/ui/angular/auth').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [
    LayoutComponent,
    WelcomeComponent
  ],
})
export class AppRoutingModule { }
