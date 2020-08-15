import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TranslateModule } from '@scp/translate/transloco';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [WelcomeComponent],
})
export class AppRoutingModule { }
