import { Component, OnInit } from '@angular/core';
import { InventarioLoteriaFisicaService } from './inventario-loteria-fisica.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
//Se importa la estructural del condicional
import { NgIf } from '@angular/common';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-inventario-loteria-fisica',
  templateUrl: './inventario-loteria-fisica.component.html',
  styleUrls: ['./inventario-loteria-fisica.component.css']
})
export class InventarioLoteriaFisicaComponent implements OnInit {

  constructor(private loteriaFisica: InventarioLoteriaFisicaService, private fb: FormBuilder, private vali: ValidacionesCedulaService) { }

  ngOnInit(): void {
    this.myForm = this.vali.validarCedula();
  }


  myForm: any;
  cargando: boolean = false;
  mostrarTexto: boolean = false;
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  inventarioLoteriaFisica: any[] = [];
  page = 1;

   //Se verifica la validación del formulario 
   onSubmit(cedulaColocador:string) {

     if (this.myForm.valid) {
      
      this.cargando = true;
       
      this.loteriaFisica.cartarInventarioLoteriaFisica(cedulaColocador).subscribe(loteriaFisica => {
        
        this.inventarioLoteriaFisica = Object.values(loteriaFisica);

        if (this.inventarioLoteriaFisica.length==0) {
          this.condicion = "no existen registros con esa cedula";
          this.inventarioLoteriaFisica = [""];
          this.cargando = false;
          this.mostrarTexto = false;
          this.cedula2 = "";
          this.validacionRed = false;
        } else {
          this.cargando = false;
          this.cedula2 = cedulaColocador;
          this.mostrarTexto = true;
        }


      });
    } else {

      this.condicion = "Por favor digite su cedula";
      this.validacionRed = false;
    }
  }



  quitarMensajesError(cedula:string) {

    if (cedula.length == 0) {
      this.inventarioLoteriaFisica = [""];
      this.validacionRed = true;
      this.condicion = "";
      this.mostrarTexto = false;
      this.cedula2 = "";
      
    } 
  }

  limpiar() {
    this.condicion = "";
    this.validacionRed = true;
  }

}
