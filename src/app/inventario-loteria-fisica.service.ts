import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioLoteriaFisicaService {

  constructor(private http: HttpClient) { }

  cartarInventarioLoteriaFisica(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }
}
