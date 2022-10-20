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

  traerDatosRaspa(cedula:string) {
    this.raspas.cargarRaspas().subscribe(raspa => {
      this.inventarioRaspas = Object.values(raspa);
      console.log(this.inventarioRaspas);

      this.cedula = cedula;

    })
  }

  cedula: string = "";
  inventarioRaspas: any[] = [];

  

}
