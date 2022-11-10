import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesDiaService {

  constructor(private http: HttpClient) { }

  traerTransacciones(cedulaColocador:string, pass:string){
    return this.http.get(`transaccionesdia/'${cedulaColocador}'/'${pass}'`);
  }
}
