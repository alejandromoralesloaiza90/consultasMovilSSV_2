import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnuladosDelDIaService } from '../anulados-del-dia.service';

@Component({
  selector: 'app-anulados-del-dia',
  templateUrl: './anulados-del-dia.component.html',
  styleUrls: ['./anulados-del-dia.component.css']
})
export class AnuladosDelDiaComponent implements OnInit {

  constructor(private anuladosDelDia: AnuladosDelDIaService) { }

  ngOnInit(): void {
  }

  

  traerDatosAnulados(cedula:string) {
    this.anuladosDelDia.cargarAnuladosDelDia().subscribe(anulados => {
      this.inventarioAnuladosDelDia = Object.values(anulados);

      this.cedula = cedula;

    })
  }

  inventarioAnuladosDelDia: any[] = [];
  cedula: string = "";
  

}
