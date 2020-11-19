import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroClienteComponent } from './paginas/registro-cliente/registro-cliente.component';
import { RegistroEmpresaComponent } from './paginas/registro-empresa/registro-empresa.component';
import { LoginComponent } from './paginas/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DesignComponent } from './paginas/design/design.component';


const routes: Routes = [ 
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'registro-cliente', component: RegistroClienteComponent
  }, 
  {
    path: 'registro-empresa', component: RegistroEmpresaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'diseño', component: DesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 


