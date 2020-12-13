import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpClient: HttpClient) { }
  
  guardarProducto(id, producto, file: File):Observable<any>{
    const form = new FormData();
    form.append('nombre', producto.nombre);
    form.append('precio', producto.precio);
    form.append('descripcion', producto.descripcion);
    form.append('imagen', file);
    return this.httpClient.put(`http://localhost:8888/empresas/${id}/productos`,form);
  }

  guardarSitio(id, sitio):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/empresas/${id}/sitioweb`,sitio);
  }
  
}
