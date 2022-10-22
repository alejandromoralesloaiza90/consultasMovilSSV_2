import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DevolucionFraccionesService } from '../devolucion-fracciones.service';

@Component({
  selector: 'app-fracciones-proceso-devolucion',
  templateUrl: './fracciones-proceso-devolucion.component.html',
  styleUrls: ['./fracciones-proceso-devolucion.component.css']
})
export class FraccionesProcesoDevolucionComponent implements OnInit {

  constructor(private devolucion:DevolucionFraccionesService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
