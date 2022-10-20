import { Component, OnInit } from '@angular/core';
import { PremioRaspaService } from '../premio-raspa.service';

@Component({
  selector: 'app-component-premios',
  templateUrl: './component-premios.component.html',
  styleUrls: ['./component-premios.component.css']
})
export class ComponentPremiosComponent implements OnInit {

  constructor(private premiosRaspas:PremioRaspaService) { }

  ngOnInit(): void {

    this.premiosRaspas.cargarPremiosRaspas().subscribe(premiosRaspa => {
      

      this.savePremios = Object.values(premiosRaspa);

      console.log(this.savePremios);

    });

  }

  savePremios: any[] = [];


}