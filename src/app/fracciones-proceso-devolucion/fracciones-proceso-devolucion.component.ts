import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DevolucionFraccionesService } from '../devolucion-fracciones.service';
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-fracciones-proceso-devolucion',
  templateUrl: './fracciones-proceso-devolucion.component.html',
  styleUrls: ['./fracciones-proceso-devolucion.component.css']
})
export class FraccionesProcesoDevolucionComponent implements OnInit {

  constructor(private devolucion:DevolucionFraccionesService, private vali:ValidacionesCedulaService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.vali.validarCedula();
  }

  myForm: any;
  
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  devolucionFracciones: any[] = [];

  onSubmit() {

    if (this.myForm.valid) {
      
      this.devolucion.devolucionFracciones().subscribe(devolucion => {
      this.devolucionFracciones = Object.values(devolucion);
      this.condicion = "";
      
      });
      this.validacionRed = true;
    } else {

      console.log("faltan datos");
      this.condicion = "Por favor digite su cedula";
      this.validacionRed = false;
    }
  }

  cedula1(cedula:string){
    if(this.myForm.valid){
      this.cedula2 = cedula;
    }
    else{
      this.cedula2 = "";

    }
  }

  quitarMensajesError(cedula:string) {
    if (cedula=="") {
      this.validacionRed = true;
      this.condicion = "";
    } else {
      console.log("tiene datos");
    }
  }

}
