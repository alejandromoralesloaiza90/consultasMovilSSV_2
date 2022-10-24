import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevolucionFraccionesService {

  constructor(private http: HttpClient) { }
  
  devolucionFracciones(cedula:string) {
    return this.http.get(`https://10.25.1.137:3000/devolucion/'${cedula}'`);
  }


}
