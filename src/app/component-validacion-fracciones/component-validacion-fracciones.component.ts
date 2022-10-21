import { Component, OnInit } from '@angular/core';
import {ValidacionFraccionesService} from '../validacion-fracciones.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder} from '@angular/forms';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-component-validacion-fracciones',
  templateUrl: './component-validacion-fracciones.component.html',
  styleUrls: ['./component-validacion-fracciones.component.css']
})
export class ComponentValidacionFraccionesComponent implements OnInit {

  constructor(private fracciones:ValidacionFraccionesService, public fb: FormBuilder , private vali:ValidacionesCedulaService) { }

  ngOnInit(): void {
    this.myForm=this.vali.validarFraccion();
  }

  myForm: any;

  validacionRed: boolean = true;
  condicion: string = "";
  fraccion2:string="";
  consultasFracciones: any[] = [];
  //Se verifica la validación del formulario 
  onSubmit() {

    if (this.myForm.valid) {
      
      this.fracciones.cargarFracciones().subscribe(fracciones=>{
      this.consultasFracciones = Object.values(fracciones);
      this.condicion = "";
      
      });
      this.validacionRed = true;
    } else {

      console.log("faltan datos");
      this.condicion = "Por favor digite el número de la fracción";
      this.validacionRed = false;
    }
  }

  //validamos los datos del formulario y llenamos la variable cedula
  fracciones1(cedula:string){
    if(this.myForm.valid){
      this.fraccion2 = cedula;
    }
    else{
      this.fraccion2 = "";

    }
  }

}
