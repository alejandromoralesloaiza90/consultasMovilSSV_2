import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { TransaccionesDiaService } from '../transacciones-dia.service'
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

  myForm: any;
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  transaccionDia: any[] = [];

  //Se verifica la validación del formulario 
  onSubmit() {

    if (this.myForm.valid) {
      
      this.transaccionesdeldia.traerTransacciones().subscribe(transaccionesdia => {
      this.transaccionDia = Object.values(transaccionesdia);
      this.condicion = "";
      });
      this.validacionRed = true;

    } else {

      console.log("faltan datos");
      this.condicion = "Por favor verifique su cedula y su contraseña";
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
