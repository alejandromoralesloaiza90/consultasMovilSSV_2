import { Component, OnInit } from '@angular/core';
import { PremioRaspaService } from '../premio-raspa.service';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-component-premios',
  templateUrl: './component-premios.component.html',
  styleUrls: ['./component-premios.component.css']
})
export class ComponentPremiosComponent implements OnInit {

  constructor(private premiosRaspas: PremioRaspaService, public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  myForm = this.fb.group({

    cedulavalidar: ['', [Validators.required,  Validators.pattern('[0-9 ]*')]]

  })
  
  validacionRed: boolean = true;
  condicion: string = "";
  cedula2: string = "";
  savePremios: any[] = [];

  onSubmit() {
    if (this.myForm.valid) {
      
      this.premiosRaspas.cargarPremiosRaspas().subscribe(premiosRaspa => {
      this.savePremios = Object.values(premiosRaspa);
        
        
        this.condicion = "";
      
      });

    } else {

      console.log("faltan datos");
      this.condicion = "Por favor llene el campo con numeros";
      this.validacionRed = false;
    }
  }


  cedula1(cedula:string){
    if(this.myForm.valid){
      this.cedula2 = cedula;
    }
    else{
      this.cedula2 = "";

    }
  }

}
