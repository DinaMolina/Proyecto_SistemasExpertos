import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  listarEmpresas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/empresas',{});
  }
  guardarProductos(id,producto):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/clientes/${id}/compras`, producto);
  }
  obtenterCliente(id):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/clientes/${id}`,{});
  }
}
