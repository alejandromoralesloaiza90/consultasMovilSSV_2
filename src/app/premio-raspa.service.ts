import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremioRaspaService {

  constructor(private httpClient: HttpClient) { }

  cargarPremiosRaspas() {
    return this.httpClient.get("https://run.googleapis.com/$discovery/rest?version=v2");
  }
}
