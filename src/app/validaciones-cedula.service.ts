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
      cedulavalidar: ['', [Validators.required,  Validators.pattern('[0-9 ]*')]],
    })

    return this.myForm;

  }

  


}
