import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppmainComponent } from './appmain/appmain.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
    { path: '', component: ConnexionComponent },
    { path: 'Inscription', component: InscriptionComponent },
    { path: 'Main', component: AppmainComponent }
    

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }