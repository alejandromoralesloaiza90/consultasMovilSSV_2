import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class InventarioRaspaService {

  constructor(private httpClient: HttpClient) { }
  
  url: string = "http://localhost/pruebaPHP/";

  cargarRaspas() {
    return this.httpClient.get("http://localhost/pruebaPHP/databaseConect.php");
  }


}
