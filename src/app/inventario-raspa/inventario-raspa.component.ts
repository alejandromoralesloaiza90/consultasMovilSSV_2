import { Component, OnInit } from '@angular/core';
import { InventarioRaspaService } from '../inventario-raspa.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder } from '@angular/forms';
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-inventario-raspa',
  templateUrl: './inventario-raspa.component.html',
  styleUrls: ['./inventario-raspa.component.css']
})
export class InventarioRaspaComponent implements OnInit {

  constructor(private raspas:InventarioRaspaService, private fb: FormBuilder, private vali:ValidacionesCedulaService ) { }

  ngOnInit(): void {
    this.myForm = this.vali.validarCedula();
  }

  //se inicializan las variables
  mostrarTabla:boolean = true;
  cargando: boolean = false;
  ocultarTexto:boolean = false;
  myForm: any;
  validacionRed: boolean = true;
  condicion: string = "";
  inventarioRaspas: any[] = [];
  cedulaInventario: string = "";

  onSubmit(cedulas:string) {

    

    if (this.myForm.valid) {
      this.cargando = true;
      this.raspas.cargarRaspas(cedulas).subscribe(raspas => {
        this.inventarioRaspas = Object.values(raspas);
        
        if (this.inventarioRaspas.length==0) {
          this.condicion = "no existen registros con ese numero de cedula";
          this.validacionRed = true;
          this.cedulaInventario = "";
        }
        this.cargando = false;
        this.mostrarTabla = true;
      });
      
    } else {

      console.log("faltan datos");
      this.condicion = "Por favor digite su cedula";
      this.validacionRed = false;
    }
  }

  inventarioRaspa(cedula:string){
    if(this.myForm.valid){
      this.cedulaInventario = cedula;
    }
    else{
      this.cedulaInventario = "";

    }
  }
  
  quitarMensajesError(cedula:string) {
    if (cedula=="") {
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
