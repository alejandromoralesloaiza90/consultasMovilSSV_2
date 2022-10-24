import { Component, OnInit } from '@angular/core';
import { ConsultaPremiosService } from '../consulta-premios.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder} from '@angular/forms';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-consulta-premios',
  templateUrl: './consulta-premios.component.html',
  styleUrls: ['./consulta-premios.component.css']
})
export class ConsultaPremiosComponent implements OnInit {

  constructor(private premio:ConsultaPremiosService, public fb: FormBuilder , private vali:ValidacionesCedulaService) { }

  ngOnInit(): void {
    this.myForm=this.vali.validarSerie();
  }


  //Se inicializan las variables
  myForm: any;
  mostrarTabla:boolean = true;
  cargando: boolean = false;
  ocultarTexto:boolean = false;
  validacionRed: boolean = true;
  condicion: string = "";
  serie2:any="";
  numero2:any="";
  consultasPremio: any[]=[];
  page: number = 1;

  //Se verifica la validación del formulario 
  onSubmit(serie:string, numero:string) {

    //verifico datos para mostrar mensajes
    if(serie.length<=3 && numero.length<=15){
      this.cargando=false;
      this.ocultarTexto = false;
      this.validacionRed = true;
    }

    //valido datos a consultar y muestro respuesta
    if (this.myForm.valid) {
      
      this.premio.cargarConsultaPremios(serie, numero).subscribe(premio=> {
        this.consultasPremio = Object.values(premio);

        if (this.consultasPremio.length==0) {
          this.condicion = "no existe registro con estos datos";
          this.validacionRed = false;
          this.mostrarTabla = false;
        } else {
          this.ocultarTexto = true;
          this.mostrarTabla = true;
        }

        
      });
      
    } else {
      console.log("faltan datos");
      this.condicion = "Por favor verifique la serie o el numero";
      this.validacionRed = false;
    }
  }

  //validamos los datos del formulario y llenamos la variable cedula
  premios1(serie:string, numero:string){
    if(this.myForm.valid){
      this.numero2 =numero;
      this.serie2=serie;
    }
    else{
      this.numero2 ="";
      this.serie2="";

    }
  }

  //validamos los mensajes de error  al borrar lo escrito en el input
  quitarMensajesError(serie:string , numero:string ) {
    if (serie=="" && numero=="")  {
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
