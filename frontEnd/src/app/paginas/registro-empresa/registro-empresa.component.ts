import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {
  empresas: any = [];
  formularioEmpresa = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    nombreEmpresa: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoEmpresa: new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  constructor(private httpClient:HttpClient, private authService: AuthService, private router: Router) { }
  backendHost :string = 'http://localhost:8888';
  ngOnInit(){
    this.httpClient.get(`${this.backendHost}/empresas`)
    .subscribe(res=>{
      this.empresas = res;
      console.log(this.empresas);
    });
  }
  guardar(form){
    this.authService.registerEmpresas(form.value).subscribe(res => {
      this.router.navigateByUrl(`/${res.dataUser.pagina}`);
    });
  }
}
