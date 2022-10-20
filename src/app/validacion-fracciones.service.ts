import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionFraccionesService {

  //creo una variable de tipo httpClient en el constructor
  constructor(private http: HttpClient) { }
  
  //creo una funcion y en ella uso la variable anteriormente creada para obtener una url por el metodo get
  cargarValidacionFracciones() {
    //retorno el json al archivo ts de validacion fracciones
    return this.http.get("");
  }

}
