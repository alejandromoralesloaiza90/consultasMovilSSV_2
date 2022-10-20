import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentPremiosComponent } from './component-premios/component-premios.component';
import { ComponentValidacionFraccionesComponent } from './component-validacion-fracciones/component-validacion-fracciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioRaspaComponent } from './inventario-raspa/inventario-raspa.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'premiosRaspa', component: ComponentPremiosComponent },
  {path:'inventarioRaspa', component:InventarioRaspaComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ComponentPremiosComponent,
    ComponentValidacionFraccionesComponent,
    InicioComponent,
    InventarioRaspaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
