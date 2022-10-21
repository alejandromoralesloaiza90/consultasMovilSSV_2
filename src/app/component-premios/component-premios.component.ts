import { Component, OnInit } from '@angular/core';
import { PremioRaspaService } from '../premio-raspa.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
//Se importa la estructural del condicional
import { NgIf } from '@angular/common';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-component-premios',
  templateUrl: './component-premios.component.html',
  styleUrls: ['./component-premios.component.css']
})

export class ComponentPremiosComponent implements OnInit {

  constructor(private premiosRaspas: PremioRaspaService, public fb: FormBuilder , private vali:ValidacionesCedulaService) { }

  ngOnInit(): void {
    this.myForm = this.vali.validarCedula();
  }

  myForm: any;
  
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  savePremios: any[] = [];

  //Se verifica la validación del formulario 
  onSubmit() {

    if (this.myForm.valid) {
      
      this.premiosRaspas.cargarPremiosRaspas().subscribe(premiosRaspa => {
      this.savePremios = Object.values(premiosRaspa);
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

}
