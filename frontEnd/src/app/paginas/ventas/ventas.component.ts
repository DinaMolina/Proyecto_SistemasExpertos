import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  empresas: any = [];
  cliente: any;
  regionVisible = 'pagina';
  idCliente: any;
  usuario: any;
  constructor(private clientesService: ClientesService, private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.cliente = this.authService.getNombre();
    this.idCliente = this.authService.getIdCliente();
    this.clientesService.listarEmpresas().subscribe(
      res=>{
        this.empresas = res;
        console.log(this.empresas);
        console.log(this.idCliente);
      },
      error=>{
        console.log(error);
      }
    );
    this.clientesService.obtenterCliente(this.idCliente).subscribe(
      res=>{
        this.usuario = res;
        console.log(this.usuario);
      },
      error=>{
        console.log(error);
      }
    )
  }
  visitarPagina(id){
    this.authService.setIdEmpresa(id);
    this.authService.setIdCliente(this.idCliente);
    this.router.navigateByUrl('admin-companies/design/sitio');
  }
  verProductos(){
    this.regionVisible = 'productos';

  }
  verPagina(){
    this.regionVisible = 'pagina';
  }
}
