import { Component, OnInit } from '@angular/core';
import { ConsultaPremiosService } from '../consulta-premios.service';
//Se importan las ayudas para el manejo del formulario
import { FormBuilder} from '@angular/forms';
//importamos servicio de validación
import { ValidacionesCedulaService } from '../validaciones-cedula.service';

@Component({
  selector: 'app-consulta-premios',
  templateUrl: './consulta-premios.component.html',
  styleUrls: ['./consulta-premios.component.css']
})
export class ConsultaPremiosComponent implements OnInit {

  constructor(private premio:ConsultaPremiosService, public fb: FormBuilder , private vali:ValidacionesCedulaService) { }

  ngOnInit(): void {
    this.myForm=this.vali.validarSerie();
  }

  traerConsultasPremio(serie:any, numero:any){
    this.premio.cargarConsultaPremios().subscribe(premio=> {
      this.consultasPremio = Object.values(premio);
      this.numero =numero;
      this.serie=serie;
    })

  }
  myForm: any;

  validacionRed: boolean = true;
  condicion: string = "";
  fraccion2:string="";
  serie:any="";
  numero:any="";
  consultasPremio: any[]=[];
  //Se verifica la validación del formulario 
  onSubmit() {

    if (this.myForm.valid) {
      
      this.premio.cargarConsultaPremios().subscribe(consultPremio=>{
      this.consultasPremio= Object.values(consultPremio);
      this.condicion = "";
      
      });
      this.validacionRed = true;
    } else {

      console.log("faltan datos");
      this.condicion = "Por favor verifique la serie y ";
      this.validacionRed = false;
    }
  }

  //validamos los datos del formulario y llenamos la variable cedula
  fracciones1(cedula:string){
    if(this.myForm.valid){
      this.fraccion2 = cedula;
    }
    else{
      this.fraccion2 = "";

    }
  }
}
