import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class InventarioRaspaService {

  constructor(private httpClient: HttpClient) { }

  cargarRaspas(cedula:string) {
    return this.httpClient.get(`https://10.25.1.137:3000/inventarioraspe/${cedula}`);
  }


}
