import { Component, OnInit } from '@angular/core';
import { PremioRaspaService } from '../premio-raspa.service';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';


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
    cedulavalidar: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]")]]
  })
  
  condicion: string = "";
  cedula: string = "";
  savePremios: any[] = [];

  onSubmit(cedula:string) {
    if (this.myForm.valid) {
      
      this.premiosRaspas.cargarPremiosRaspas().subscribe(premiosRaspa => {
      this.savePremios = Object.values(premiosRaspa);
        
        this.cedula = cedula;
      
      });

    } else {
      
    }
  }

}
