import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroClienteComponent } from './paginas/registro-cliente/registro-cliente.component';
import { RegistroEmpresaComponent } from './paginas/registro-empresa/registro-empresa.component';
import { LoginComponent } from './paginas/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DesignComponent } from './paginas/design/design.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { EmpresaComponent } from './paginas/empresa/empresa.component';
import { SitioComponent } from './paginas/sitio/sitio.component';


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
    path: 'admin-companies/design', component: DesignComponent
  },
  {
    path: 'ventas', component: VentasComponent
  },
  {
    path: 'admin-companies', component: EmpresaComponent
  },
  {
    path: 'sitio', component: SitioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 


