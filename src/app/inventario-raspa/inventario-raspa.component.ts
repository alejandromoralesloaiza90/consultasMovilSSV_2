import { Component, OnInit } from '@angular/core';
import { InventarioRaspaService } from '../inventario-raspa.service';
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-inventario-raspa',
  templateUrl: './inventario-raspa.component.html',
  styleUrls: ['./inventario-raspa.component.css']
})
export class InventarioRaspaComponent implements OnInit {

  constructor(private raspas:InventarioRaspaService, private vali:ValidacionesCedulaService ) { }

  ngOnInit(): void {
    this.myForm = this.vali.validarCedula();
  }

  myForm: any;
  validacionRed: boolean = true;
  condicion: string = "";
  inventarioRaspas: any[] = [];
  cedulaInventario: string = "";

  onSubmit() {

    if (this.myForm.valid) {
      
      this.raspas.cargarRaspas().subscribe(premiosRaspa => {
        console.log(premiosRaspa);
      this.inventarioRaspas = Object.values(premiosRaspa);
      this.condicion = "";
      
      });
      this.validacionRed = true;
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
  
  d(cedula:string) {
    if (cedula=="") {
      this.validacionRed = true;
      this.condicion = "";
    } else {
      console.log("tiene datos");
    }
  }
  

}
