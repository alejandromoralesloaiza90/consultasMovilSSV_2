import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevolucionFraccionesService {

  constructor(private http: HttpClient) { }
  
  devolucionFracciones(cedula:string) {
    return this.http.get(`fraccionesdevolucion/'CV${cedula}'`);
  }


}
