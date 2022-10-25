import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPremiosService {

  constructor(private http:HttpClient) { }

  //servicio para traer la informacion de los premios 
  cargarConsultaPremios(serie:string, numero:string){
    return this.http.get(`https://10.25.1.137:3000/premios/'${serie}'/'${numero}'`);
  }
}
