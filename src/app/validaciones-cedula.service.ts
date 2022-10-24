import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesCedulaService {

  constructor(public fb: FormBuilder) { }

  myForm: any
  
  // función validar cedula
  validarCedula() {
    this.myForm = this.fb.group({
      cedulavalidar: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9 ]*')]]
    })
    return this.myForm;
  }

  //función para validar la fracción
  validarFraccion(){
    this.myForm = this.fb.group({
      fraccionvalidar: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('[0-9 ]*')]]

    })

    return this.myForm;
  }
  //función validar transacciones del día
  validarTransaccionesDia(){
    this.myForm = this.fb.group({
      cedulavalidar: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9 ]*')]],
      transaccionvalidar: ['', [Validators.required]]
    })

    return this.myForm;
  }
  //función validar transacciones del día
  validarSerie(){
    this.myForm = this.fb.group({
      serie: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('[A-Za-z0-9 ]*')]],
      numero: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9 ]*')]]
    })

    return this.myForm;
  }

  //función validar fracción devolución
  validarFraccionDevolucion(){
    this.myForm = this.fb.group({
      fraccion: ['', [Validators.required, Validators.maxLength(13), Validators.pattern('[A-Z0-9 ]*')]]
    })

    return this.myForm;
  }
}
