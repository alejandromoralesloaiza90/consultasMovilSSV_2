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
    this.ocultarTexto = false;
    this.myForm=this.vali.validarFraccion();
  }

  myForm: any;
  
  mostrarTabla:boolean = true;
  cargando: boolean = false;
  ocultarTexto:boolean = false;
  validacionRed: boolean = true;
  condicion: string = "";
  fraccion2:string="";
  consultasFracciones: any[] = [];
  //Se verifica la validación del formulario 
  onSubmit(fraccionColocador: string) {

    if (fraccionColocador.length>19) {
      this.cargando = true;
    }

    
    if (this.myForm.valid) {
      this.fracciones.cargarFracciones(fraccionColocador).subscribe(fracciones=>{
      this.consultasFracciones = Object.values(fracciones);
        this.condicion = "";
        this.ocultarTexto = true;
        this.cargando = false;
        this.mostrarTabla = true;
      });
      this.validacionRed = true;
      
    } else {
      this.consultasFracciones = [];
      console.log("faltan datos");
      this.condicion = "Por favor digite el número de la fracción";
      this.validacionRed = false;
    }
    
    

  }

  //validamos los datos del formulario y llenamos la variable cedula
  fracciones1(cedula: string) {
    
    if(this.myForm.valid){
      this.fraccion2 = cedula;
      
    }
    else{
      this.fraccion2 = "";

    }
  }

  quitarMensajesError(cedula: string) {

    if (cedula.length <= 19 && cedula.length>=18  ) {
      this.mostrarTabla = false;
      this.condicion = "Por favor digite un numero de fraccion valido";
      this.ocultarTexto = false;
      this.consultasFracciones = [""];
      this.validacionRed = true;
    } else if(cedula=="") {
      this.condicion = "";
      this.validacionRed = true;
    } 
  }

  limpiar() {
    this.condicion = "";
    this.validacionRed = true;
  }

}
