import { AppEndPoints } from './../endpoints.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        OfertaComponent,
        OfertasComponent,
        NuevaOfertaComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule],
    exports: [

    ],
    providers: []
})

export class PagesModule{}