import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesCedulaService {

  constructor(public fb: FormBuilder) { }

  myForm: any

  validarCedula() {
    this.myForm = this.fb.group({

      

      cedulavalidar: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9 ]*')]]
    })
    return this.myForm;
  }

  //funsión para validar la fracción
  validarFraccion(){
    this.myForm = this.fb.group({
      fraccionvalidar: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[0-9 ]*')]]

    })

    return this.myForm;
  }
  //función validar transacciones del día
  validarTransaccionesDia(){
    this.myForm = this.fb.group({
      cedulavalidar: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9 ]*')]],
      transaccionvalidar: ['', [Validators.required, Validators.pattern(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/)]]
    })

    return this.myForm;
  }
  //función validar transacciones del día
  validarSerie(){
    this.myForm = this.fb.group({
      serie: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9 ]*')]],
      transaccionvalidar: ['', [Validators.required, Validators.pattern(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/)]]
    })

    return this.myForm;
  }
}
