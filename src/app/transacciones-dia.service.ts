import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesDiaService {

  constructor(private http: HttpClient) { }

  traerTransacciones(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }
}
