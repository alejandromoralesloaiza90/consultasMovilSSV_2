import { Component, OnInit } from '@angular/core';
import { InventarioLoteriaFisicaService } from '../inventario-loteria-fisica.service';
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
  
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  inventarioLoteriaFisica: any[]=[];

   //Se verifica la validación del formulario 
   onSubmit() {

    if (this.myForm.valid) {
      
      this.loteriaFisica.cartarInventarioLoteriaFisica().subscribe(loteriaFisica=>{
      this.inventarioLoteriaFisica = Object.values(loteriaFisica);
      this.condicion = "";
      
      });
      this.validacionRed = true;
    } else {

      console.log("faltan datos");
      this.condicion = "Por favor digite su cedula";
      this.validacionRed = false;
    }
  }

  //validamos los datos del formulario y llenamos la variable cedula
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
