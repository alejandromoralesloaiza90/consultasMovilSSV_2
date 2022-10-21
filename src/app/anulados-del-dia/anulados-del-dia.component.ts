import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AnuladosDelDIaService } from '../anulados-del-dia.service';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-anulados-del-dia',
  templateUrl: './anulados-del-dia.component.html',
  styleUrls: ['./anulados-del-dia.component.css']
})

export class AnuladosDelDiaComponent implements OnInit {

  constructor(private anuladosDelDia: AnuladosDelDIaService, public fb: FormBuilder, private vali:ValidacionesCedulaService) { }

  ngOnInit(): void {
    this.myForm = this.vali.validarCedula();
  }

  myForm: any;

  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  inventarioAnuladosDelDia: any[] = [];

  //Se verifica la validación del formulario 
  onSubmit() {

    if (this.myForm.valid) {
      
      this.anuladosDelDia.cargarAnuladosDelDia().subscribe(anulados => {
      this.inventarioAnuladosDelDia = Object.values(anulados); 
      this.condicion = "";
      });
      this.validacionRed = true;
    } else {

      console.log("faltan datos");
      this.condicion = "Por favor digite su cedula";
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
