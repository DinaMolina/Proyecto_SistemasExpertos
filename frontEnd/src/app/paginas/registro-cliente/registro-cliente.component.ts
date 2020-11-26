import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  clientes: any = [];
  formularioCliente = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });
  
  constructor(private httpClient:HttpClient, private authService: AuthService, private router: Router) { }
  backendHost :string = 'http://localhost:8888';
  ngOnInit(){
    this.httpClient.get(`${this.backendHost}/clientes`)
    .subscribe(res=>{
      this.clientes = res;
      console.log(this.clientes);
    });
  }
  guardar(form){
    this.authService.registerCliente(form.value).subscribe(res => {
      this.router.navigateByUrl(`/${res.dataUser.pagina}`);
    });
  }

}
