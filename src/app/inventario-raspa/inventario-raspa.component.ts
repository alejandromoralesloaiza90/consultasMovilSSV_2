import { Component, OnInit } from '@angular/core';
import { InventarioRaspaService } from '../inventario-raspa.service';

@Component({
  selector: 'app-inventario-raspa',
  templateUrl: './inventario-raspa.component.html',
  styleUrls: ['./inventario-raspa.component.css']
})
export class InventarioRaspaComponent implements OnInit {

  constructor(private raspas:InventarioRaspaService) { }

  ngOnInit(): void {

  }

  //creo una funcion la cual obtiene el json del servicio inventarioRaspa
  traerDatosRaspa(cedula: string) {
    //llamo a la funcion del servicio y uso la funcion subscribe para crear un observable 
    this.raspas.cargarRaspas().subscribe(raspa => {
      //creo una variable la cual guardara la data del observable en formato object, para usarse en el html y mostrar los datos
      this.inventarioRaspas = Object.values(raspa);
      console.log(this.inventarioRaspas);

      this.cedula = cedula;

    })
  }

  cedula: string = "";
  inventarioRaspas: any[] = [];

  

}
