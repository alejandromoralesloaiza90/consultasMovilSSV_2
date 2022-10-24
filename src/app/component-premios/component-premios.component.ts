import { Component, OnInit } from '@angular/core';
import { PremioRaspaService } from '../premio-raspa.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder} from '@angular/forms';
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
    this.mostrartabla = true;
    if (this.myForm.valid) {
      
      this.premiosRaspas.cargarPremiosRaspas(cedulaColocador).subscribe(premiosRaspa => {
        this.savePremios = Object.values(premiosRaspa);
        if (this.savePremios.length==0) {
          this.condicion = "no existen registros con esa cedula";
        }
        this.cargando = false;
        this.ocultarTexto = true;
        this.mostrartabla = true;
      
      });
      this.validacionRed = true;
    } else {

      console.log("faltan datos");
      this.condicion = "ingrese un numero de cedula valido";
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

  //Quitar mensajes de error
  limpiar() {
    this.condicion = "";
    this.validacionRed = true;
  }
  quitarMensajesError(cedula:string) {
    
    if (cedula.length==0) {
      this.mostrartabla = false;
      this.ocultarTexto = false;
      this.mostrartabla = false;
      this.savePremios = [];
    }


  }

}
