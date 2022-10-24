import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremioRaspaService {

  constructor(private httpClient: HttpClient) { }

  cargarPremiosRaspas(cedulaColocador:string) {
    return this.httpClient.get(`https://10.25.1.137:3000/raspepremios/'${cedulaColocador}' `);
  }
}
