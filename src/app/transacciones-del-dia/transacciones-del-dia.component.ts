import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { TransaccionesDiaService } from './transacciones-dia.service'
//Se importan las ayudas para el manejo del formulario
import { FormBuilder} from '@angular/forms';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-transacciones-del-dia',
  templateUrl: './transacciones-del-dia.component.html',
  styleUrls: ['./transacciones-del-dia.component.css']
})
export class TransaccionesDelDiaComponent implements OnInit {

  constructor(private transaccionesdeldia: TransaccionesDiaService, public fb: FormBuilder , private vali:ValidacionesCedulaService) { }

  ngOnInit(): void {
    this.myForm = this.vali.validarTransaccionesDia();
  }

  cargando: boolean = false;
  ocultarTexto:boolean = false;
  myForm: any;
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  transaccionDia: any[] = [];
  pages: number = 1;
  

  //Se verifica la validación del formulario 
  onSubmit(cedulaColocador:string,pass:string) {

    if (this.myForm.valid) {
      
      this.cargando = true;

      this.transaccionesdeldia.traerTransacciones(cedulaColocador, pass).subscribe(transaccionesdia => {
      
        this.transaccionDia = Object.values(transaccionesdia);
        this.condicion = "";
        
        if (this.transaccionDia.length==0) {
          this.condicion = "aun no se han registrado transacciones con estos datos";
          this.validacionRed = false;
          this.cedula2 = "";
          this.cargando = false;
          this.ocultarTexto = false;
        }else {
          this.cedula2 = cedulaColocador;
          this.cargando = false;
          this.ocultarTexto = true;
        }

      });

    } else {
      this.condicion = "Por favor verifique su cedula o su contraseña";
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
    if (cedula.length==0) {
      this.validacionRed = true;
      this.cedula2 = "";
      this.ocultarTexto = false;
    }
  }

  limpiar(cedula:string) {
    this.condicion = "";
    this.validacionRed = true;
  }
  
}
