import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            { path: '', redirectTo: 'sign-in' },
            {
                path: 'sign-in', component: SignInComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
