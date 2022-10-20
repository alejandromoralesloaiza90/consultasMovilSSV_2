import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class InventarioRaspaService {

  constructor(private httpClient: HttpClient) { }
  
  cargarRaspas() {
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }



}
