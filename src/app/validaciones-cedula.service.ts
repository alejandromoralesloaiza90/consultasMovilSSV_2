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
      cedulavalidar: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9 ]*')]],
      nameCedulaInventario: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9 ]*')]]
    })

    return this.myForm;

  }

  


}
