import { Component, OnInit } from '@angular/core';
import { ConsultaPremiosService } from '../consulta-premios.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder, FormGroup, FormControl, Validator} from '@angular/forms';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';
// importamos servicio para el manejo del tiempo
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-consulta-premios',
  templateUrl: './consulta-premios.component.html',
  styleUrls: ['./consulta-premios.component.css']
})
export class ConsultaPremiosComponent implements OnInit {

  form!: FormGroup;
  
  constructor(private premio:ConsultaPremiosService) { }

  ngOnInit(): void {
  }

  traerConsultasPremio(serie:any, numero:any){
    this.premio.cargarConsultaPremios().subscribe(premio=> {
      this.consultasPremio = Object.values(premio);
      this.numero =numero;
      this.serie=serie;
    })

  }
  
  myForm:any[]=[];
  serie:any="";
  numero:any="";
  consultasPremio: any[]=[];
}
