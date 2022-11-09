import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class InventarioRaspaService {

  constructor(private httpClient: HttpClient) { }

  cargarRaspas(cedula:string) {
    return this.httpClient.get(`inventarioraspa/${cedula}`);
  }


}
