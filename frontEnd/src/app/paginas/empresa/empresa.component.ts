import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { EmpresaService } from '../../services/empresa/empresa.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  backendHost :string = 'http://localhost:8888';
  formularioProducto = new FormGroup({
     imagen: new FormControl(),
     nombre: new FormControl('', [Validators.required]),
     precio: new FormControl('', [Validators.required]),
     descripcion: new FormControl('', [Validators.required])
  });
  nombreEmpresa: string;
  idEmpresa: string;
  file: File;
  clientes: any = [];
  clientesEmpresa: any = [];
  constructor(private httpClient:HttpClient, private authService: AuthService, private router: Router, private empresaService: EmpresaService) { }

  ngOnInit(): void {
   this.nombreEmpresa = this.authService.getNombre();
   this.idEmpresa = this.authService.getId();
   this.empresaService.renderizarSitio(this.idEmpresa).subscribe(
    res=>{
      this.clientesEmpresa = res.clientes;
      this.clientesEmpresa.forEach(cliente => {
        this.empresaService.obtenerClientes(cliente.cliente).subscribe(
          res=>{
            this.clientes.push(res);
            console.log(this.clientes);
          },
          error=>{
            console.log(error);
          }
        )
      });
    },
    error=>{
      console.log(error);
    }
   )
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
    
    guardar(form){
      this.empresaService.guardarProducto(this.idEmpresa,form.value,this.file).subscribe(res => {
        console.log(res);
      });
      
    }
  
  
}
