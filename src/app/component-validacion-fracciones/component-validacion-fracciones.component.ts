import { Component, OnInit } from '@angular/core';
import {ValidacionFraccionesService} from './validacion-fracciones.service';
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

    if (this.myForm.valid) {

      this.cargando = true;

      this.fracciones.cargarFracciones(fraccionColocador).subscribe(fracciones => {
        
        this.consultasFracciones = Object.values(fracciones);
        
        if (this.consultasFracciones.length ==0) {
          this.condicion = "no existen registos con ese numero de fraccion";
        } else {
          this.cargando = false;
          this.ocultarTexto = true;
          this.fraccion2 = fraccionColocador;
          this.validacionRed = true;
        }

      });
      
      
    } else {
      this.consultasFracciones = [""];
      this.ocultarTexto = false;
      this.condicion = "Campo vacio o longitud incorrecta";
      this.validacionRed = false;
    }
    
  }

 

  quitarMensajesError(cedula: string) {

    if (cedula.length==0  ) {
      this.mostrarTabla = false;
      this.ocultarTexto = false;
      this.consultasFracciones = [""];
      this.validacionRed = true;
    } 
  }

  limpiar() {
    this.condicion = "";
    this.validacionRed = true;
  }

}
