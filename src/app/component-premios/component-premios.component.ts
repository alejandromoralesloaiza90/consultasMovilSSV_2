import { Component, OnInit } from '@angular/core';
import { PremioRaspaService } from './premio-raspa.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder} from '@angular/forms';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-component-premios',
  templateUrl: './component-premios.component.html',
  styleUrls: ['./component-premios.component.css']
})

export class ComponentPremiosComponent implements OnInit {

  constructor(private premiosRaspas: PremioRaspaService, public fb: FormBuilder , private vali:ValidacionesCedulaService) { }

  //con el metodoOnInit hacemos que cuando se cargue por primera vez la pagina valide el formulario
  ngOnInit(): void {
    this.myForm = this.vali.validarCedula();
  }

  //Inicializar variables
  myForm: any;
  cargando: boolean = false;
  ocultarTexto:boolean = false;
  mostrartabla: boolean = true; 
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  savePremios: any[] = [];
  page: number = 1;

  //Se verifica la validación del formulario 
  onSubmit(cedulaColocador:string) {
    
    if (this.myForm.valid) {
      this.cargando = true;
      //llamos al servicio que nos trae los datos por url
      this.premiosRaspas.cargarPremiosRaspas(cedulaColocador).subscribe(premiosRaspa => {

       

        //aqui hacemos mas validaciones
        this.savePremios = Object.values(premiosRaspa);
        if (this.savePremios.length == 0) {
          this.condicion = "no existen registros con esa cedula";
          this.validacionRed = false;
          this.cargando = false;
        } else {
          this.cargando = false;
          this.cedula2 = cedulaColocador;
          this.ocultarTexto = true;
        }
        
      });
    } else {

      this.condicion = "ingrese un numero de cedula valido";
      this.validacionRed = false;
    }
  }

  //validamos los datos del formulario y llenamos la variable cedula
  
  //Quitar mensajes de error
  limpiar() {
    this.condicion = "";
    this.validacionRed = true;
  }

  //con esta funcion limpiamos la tabla y quitamos mensajes de error
  quitarMensajesError(cedula:string) {
    
    if (cedula.length == 0) {
      this.page = 0;
      this.mostrartabla = false;
      this.ocultarTexto = false;
      this.mostrartabla = false;
      this.savePremios = [];
    }

  }

}
