import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  formularioProducto = new FormGroup({
     imagen: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });
  nombreEmpresa: string;
  idEmpresa: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   this.nombreEmpresa = this.authService.getNombre();
   this.idEmpresa = this.authService.getId();
   console.log(this.nombreEmpresa);
  }
  
}
