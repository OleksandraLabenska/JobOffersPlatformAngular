import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { NuevaOfertaComponent } from './pages/nueva-oferta/nueva-oferta.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guards/authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nueva-oferta',
    component: NuevaOfertaComponent
  },
  {
    path: 'oferta/:id',
    component: OfertaComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent,
    canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

