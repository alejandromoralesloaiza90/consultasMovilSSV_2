import { Component, OnInit } from '@angular/core';
import { InventarioLoteriaFisicaService } from '../inventario-loteria-fisica.service';

@Component({
  selector: 'app-inventario-loteria-fisica',
  templateUrl: './inventario-loteria-fisica.component.html',
  styleUrls: ['./inventario-loteria-fisica.component.css']
})
export class InventarioLoteriaFisicaComponent implements OnInit {

  constructor(private loteriaFisica: InventarioLoteriaFisicaService) { }

  ngOnInit(): void {
  }

  traerInventarioLoteriaFisica(cedula:string){
    this.loteriaFisica.cartarInventarioLoteriaFisica().subscribe(loteriaFisica=>{
      this.inventarioLoteriaFisica = Object.values(loteriaFisica);
      this.cedula = cedula;
    })

  }
  cedula:string="";
  inventarioLoteriaFisica: any[]=[];

}
