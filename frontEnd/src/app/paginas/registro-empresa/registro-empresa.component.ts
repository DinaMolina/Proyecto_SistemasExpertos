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
  imagen: any;
  file: File;
  formularioEmpresa = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    nombreEmpresa: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoEmpresa: new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    imagen: new FormControl()
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
    this.authService.registerEmpresas(form.value, this.file).subscribe(res => {
      this.router.navigateByUrl(`/${res.dataUser.pagina}`);
    });
  }

  obtenerImagen(event){
    if(event.target.files && event.target.files.length>0){//Identifica si hay archivos
      const file=event.target.files[0];
      if(file.type.includes("image")){//Evaluar si es una imagen
          const reader= new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function load(){
              this.image=reader.result; //Asignar al thumbnail
          }.bind(this);
          this.file=file;
      }
    }  
  } 
}
