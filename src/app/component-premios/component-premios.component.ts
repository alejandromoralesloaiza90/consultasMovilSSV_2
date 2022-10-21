import { Component, OnInit } from '@angular/core';
import { PremioRaspaService } from '../premio-raspa.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
//Se importa la estructural del condicional
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-component-premios',
  templateUrl: './component-premios.component.html',
  styleUrls: ['./component-premios.component.css']
})

export class ComponentPremiosComponent implements OnInit {

  //Se importa el servicio y el contenido del form
  constructor(private premiosRaspas: PremioRaspaService, public fb: FormBuilder) { }

  ngOnInit(): void {

  }
  //Se obtiene los objetos del fomulario y se validan
  myForm = this.fb.group({
    cedulavalidar: ['', [Validators.required,  Validators.pattern('[0-9 ]*')]]
  })
  
  //se crean las variables de almacenamiento
  condicion: string = "";
  cedula2: string = "";
  savePremios: any[] = [];

  //Se verifica la validación del formulario 
  onSubmit() {
    if (this.myForm.valid) {
      
      this.premiosRaspas.cargarPremiosRaspas().subscribe(premiosRaspa => {
      this.savePremios = Object.values(premiosRaspa);
      this.condicion = "";
      
      });

    } else {
      console.log("faltan datos");
      this.condicion = "Por favor llene el campo con numeros";
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
