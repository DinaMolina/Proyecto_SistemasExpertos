import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-sitio',
  templateUrl: './sitio.component.html',
  styleUrls: ['./sitio.component.css']
})
export class SitioComponent implements OnInit {
  regionVisible = 'pagina';
  idEmpresa: any;
  infoSitio: any;
  idCliente: any;
  imagen: any;
  nombre: any;
  precio: any;
  descripcion: any;
  

  constructor(private empresaService: EmpresaService, private authService: AuthService, private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.idEmpresa= this.authService.getId();
    this.idCliente= this.authService.getIdCliente();
    console.log(this.idCliente);
    //this.idEmpresa = '5fd52d02e8c01b4854746185';
    this.empresaService.renderizarSitio(this.idEmpresa).subscribe(
      res=>{
        this.infoSitio = res;
        console.log(this.infoSitio);
      },
      error=>{
        console.log(error);
      }
    );
  }
  verProductos(){
    this.regionVisible = 'productos';

  }
  verPagina(){
    this.regionVisible = 'pagina';
  }

  crearProducto(imagen, nombre, precio, descripcion){
    
      this.imagen= imagen;
      this.nombre= nombre; 
      this.precio= precio;
      this.descripcion= descripcion;    
  }
  comprarProducto(){
    let datosProducto = {
      'imagen' : this.imagen,
      'nombre' : this.nombre,
      'precio' : this.precio,
      'descripcion' : this.descripcion
    }
    let clientes = {
      'cliente': this.idCliente,
      'nombreProducto': this.nombre
    }
    this.clienteService.guardarProductos(this.idCliente, datosProducto).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    );
    this.empresaService.guardarIdCliente(this.idEmpresa, clientes).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
