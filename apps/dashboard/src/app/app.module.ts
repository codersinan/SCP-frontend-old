import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';

import { CoreModule } from "@scp/core/angular";
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CoreModule,

    AppRoutingModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
