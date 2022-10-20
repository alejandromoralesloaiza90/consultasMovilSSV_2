import { Component, OnInit } from '@angular/core';
import { ConsultaPremiosService } from '../consulta-premios.service';

@Component({
  selector: 'app-consulta-premios',
  templateUrl: './consulta-premios.component.html',
  styleUrls: ['./consulta-premios.component.css']
})
export class ConsultaPremiosComponent implements OnInit {

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
  serie:any="";
  numero:any="";
  consultasPremio: any[]=[];
}
