import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//importamos los servicios
import { DevolucionFraccionesService } from './devolucion-fracciones.service';
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-fracciones-proceso-devolucion',
  templateUrl: './fracciones-proceso-devolucion.component.html',
  styleUrls: ['./fracciones-proceso-devolucion.component.css']
})
export class FraccionesProcesoDevolucionComponent implements OnInit {

  //Inicializamos los servicios
  constructor(private devolucion:DevolucionFraccionesService, private vali:ValidacionesCedulaService, private fb: FormBuilder) { }

  //validar datos en los inputs
  ngOnInit(): void {
    this.myForm = this.vali.validarFraccionDevolucion();
  }

  //Creación de variables 
  myForm: any;
  mostrarTabla:boolean = true;
  cargando: boolean = false;
  ocultarTexto:boolean = false;
  validacionRed: boolean = true;
  condicion: string = "";
  fraccionDevolucion2: string = "";
  devolucionFracciones: any[] = [];
  page = 1;

  //función click botón y validaciones
  onSubmit(fraccion:string) {

    //verificación validación
    if (this.myForm.valid) {

      //se valida el tamaño de la fraccion devolución para mostrar mensajes
      if(fraccion.length<=13 && fraccion.length>=10){
        this.cargando=true;
        this.ocultarTexto=false;
        this.validacionRed = true;
      }

      //Consultar fracciones devolución
      this.devolucion.devolucionFracciones(fraccion).subscribe(devolucion => {
        this.devolucionFracciones = Object.values(devolucion);
        if (this.devolucionFracciones.length==0) {
          this.condicion = "No existe registro con estos datos";
          this.validacionRed = false;
          this.mostrarTabla = false;
          this.ocultarTexto= false;
          this.cargando=false;
        } else {
          this.cargando=false;
          this.ocultarTexto = true;
          this.mostrarTabla = true;
        }
      });
    } else {
      this.condicion = "Por favor digite CV y su número de cedula";
      this.validacionRed = false;
    }
  }
  //Mostrar cedula fracción devolución consultada
  fraccion1(fraccionDevolucion:string){
    if(this.myForm.valid){
      this.fraccionDevolucion2 = fraccionDevolucion;
    }
    else{
      this.fraccionDevolucion2 = "";

    }
  }

  //Inhabilitar mensajes de error
  quitarMensajesError(fraccionDevolucion:string) {
    if (fraccionDevolucion=="") {
      this.mostrarTabla = false;
      this.ocultarTexto = false;
      this.validacionRed = true;
      this.condicion = "";
    }
  }
  limpiar() {
    this.condicion = "";
    this.validacionRed = true;
  }

}
