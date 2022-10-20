import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPremiosService {

  constructor(private http:HttpClient) { }

  cargarConsultaPremios(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }
}
