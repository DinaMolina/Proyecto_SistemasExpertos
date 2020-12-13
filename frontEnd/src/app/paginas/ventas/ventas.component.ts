import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  empresas: any = [];
  cliente: any;

  constructor(private clientesService: ClientesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cliente = this.authService.getNombre();
    this.clientesService.listarEmpresas().subscribe(
      res=>{
        this.empresas = res;
        console.log(this.empresas);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
