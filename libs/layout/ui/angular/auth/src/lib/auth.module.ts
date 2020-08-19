import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { ContainerComponent } from './container/container.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    AuthRoutingModule
  ],
  declarations:[
    ContainerComponent,
    SignInComponent,
  ],
  providers: [],
})
export class AuthModule { }
