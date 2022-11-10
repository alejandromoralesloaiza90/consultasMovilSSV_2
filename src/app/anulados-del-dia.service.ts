import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnuladosDelDIaService {

  constructor(private http: HttpClient) { }
  
  cargarAnuladosDelDia() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }


}
