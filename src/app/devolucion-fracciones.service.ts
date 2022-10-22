import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevolucionFraccionesService {

  constructor(private http: HttpClient) { }
  
  devolucionFracciones() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }


}
