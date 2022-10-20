import { Component, OnInit } from '@angular/core';
import {ValidacionFraccionesService} from '../validacion-fracciones.service';

@Component({
  selector: 'app-component-validacion-fracciones',
  templateUrl: './component-validacion-fracciones.component.html',
  styleUrls: ['./component-validacion-fracciones.component.css']
})
export class ComponentValidacionFraccionesComponent implements OnInit {

  constructor(private fracciones:ValidacionFraccionesService) { }

  ngOnInit(): void {
  }

  traerFracciones(fraccion:string){
    this.fracciones.cargarFracciones().subscribe(fracciones=>{
      this.consultasFracciones = Object.values(fracciones);
      console.log(this.consultasFracciones);
      this.fraccion=fraccion;
    })
  }

  fraccion:string="";
  consultasFracciones: any[] = [];

}
