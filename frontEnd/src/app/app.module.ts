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
import { VentasComponent } from './paginas/ventas/ventas.component';
import { EmpresaComponent } from './paginas/empresa/empresa.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";




@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent,
    RegistroEmpresaComponent,
    LoginComponent,
    DesignComponent,
    HeaderComponent,
    LandingPageComponent,
    VentasComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    QuillModule.forRoot(), 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
