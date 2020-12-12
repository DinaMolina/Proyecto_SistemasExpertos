import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitiowebService {

  constructor(private httpClient: HttpClient) { }
  guardarAplicacion(id):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/sitioweb/`,{});
  }
}
