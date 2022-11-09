import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioLoteriaFisicaService {

  constructor(private http: HttpClient) { }

  cartarInventarioLoteriaFisica(cedulaColocador:string){
    return this.http.get(`loteriafisica/'${cedulaColocador}'`);
  }
}
