import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



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
  constructor() { }

  ngOnInit(): void {
  }
  
}
