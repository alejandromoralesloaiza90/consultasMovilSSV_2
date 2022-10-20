import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentPremiosComponent } from './component-premios/component-premios.component';
import { ComponentValidacionFraccionesComponent } from './component-validacion-fracciones/component-validacion-fracciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioRaspaComponent } from './inventario-raspa/inventario-raspa.component';
import { FooterComponent } from './footer/footer.component';

import { InventarioLoteriaFisicaComponent } from './inventario-loteria-fisica/inventario-loteria-fisica.component';
import { AnuladosDelDiaComponent } from './anulados-del-dia/anulados-del-dia.component';
import { TransaccionesDelDiaComponent } from './transacciones-del-dia/transacciones-del-dia.component';
import { ConsultaPremiosComponent } from './consulta-premios/consulta-premios.component';

import { HttpClientModule } from '@angular/common/http';

import { PremioRaspaService } from './premio-raspa.service';



const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'premiosRaspa', component: ComponentPremiosComponent },
  { path: 'inventarioRaspa', component: InventarioRaspaComponent},
  { path: 'validacionFracciones', component: ComponentValidacionFraccionesComponent},
  { path: 'inventarioLoteriaFisica', component: InventarioLoteriaFisicaComponent},
  { path: 'anuladosDelDia', component: AnuladosDelDiaComponent},
  { path: 'transaccionesDelDia', component: TransaccionesDelDiaComponent},
  { path: 'consultaPremios', component: ConsultaPremiosComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    ComponentPremiosComponent,
    ComponentValidacionFraccionesComponent,
    InicioComponent,
    InventarioRaspaComponent,
    FooterComponent,
    InventarioLoteriaFisicaComponent,
    AnuladosDelDiaComponent,
    TransaccionesDelDiaComponent,
    ConsultaPremiosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [InventarioRaspaComponent, PremioRaspaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
