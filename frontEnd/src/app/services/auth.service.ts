import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { EmpresaI } from '../models/empresa';
import { JwtResponseI } from '../models/jwr-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  AUTH_SERVER: string = 'http://localhost:8888';
  authSubject = new BehaviorSubject(false);
  private token: string;
  nombre: string;
  idEmpresa: any;
  idCliente: any;
  constructor(private httpClient: HttpClient) { }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  registerCliente(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/clientes`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.nombre = res.dataUser.nombre;
            this.idCliente = res.dataUser.id;
           this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }
  registerEmpresas(user: EmpresaI, file: File): Observable<JwtResponseI> {
    const fd = new FormData();
    fd.append('id', user.id);
    fd.append('nombre', user.nombre);
    fd.append('apellido', user.apellido);
    fd.append('nombreEmpresa', user.nombreEmpresa);
    fd.append('email', user.email);
    fd.append('tipoEmpresa', user.tipoEmpresa);
    fd.append('password', user.password);
    fd.append('imagen', file);
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/empresas`,
      fd).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.nombre = res.dataUser.nombre;
            this.idEmpresa = res.dataUser.id;
           this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, 
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.nombre = res.dataUser.nombre;
            this.idEmpresa = res.dataUser.id;
            this.idCliente = res.dataUser.id;
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }
  
  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  getNombre(){
    return this.nombre;
  }
  getId(){
    return this.idEmpresa;
  }

  getIdCliente(){
    return this.idCliente;
  }

  setIdEmpresa(id){
    this.idEmpresa = id;
  }
  setIdCliente(id){
    this.idCliente = id;
  }

}
