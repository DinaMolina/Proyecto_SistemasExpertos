import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegistroClienteComponent } from './paginas/registro-cliente/registro-cliente.component';
import { RegistroEmpresaComponent } from './paginas/registro-empresa/registro-empresa.component';
import { LoginComponent } from './paginas/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DesignComponent } from './paginas/design/design.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { GaleriaImagenesComponent } from './paginas/design/galeria-imagenes/galeria-imagenes.component';
import { ColoresComponent } from './paginas/design/colores/colores.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { EmpresaComponent } from './paginas/empresa/empresa.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent,
    RegistroEmpresaComponent,
    LoginComponent,
    DesignComponent,
    HeaderComponent,
    LandingPageComponent,
    GaleriaImagenesComponent,
    ColoresComponent,
    VentasComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    QuillModule.forRoot(), 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
