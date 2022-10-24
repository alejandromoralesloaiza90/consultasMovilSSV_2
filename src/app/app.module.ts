import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ComponentPremiosComponent } from './component-premios/component-premios.component';
import { ComponentValidacionFraccionesComponent } from './component-validacion-fracciones/component-validacion-fracciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioRaspaComponent } from './inventario-raspa/inventario-raspa.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';



import { InventarioLoteriaFisicaComponent } from './inventario-loteria-fisica/inventario-loteria-fisica.component';
import { TransaccionesDelDiaComponent } from './transacciones-del-dia/transacciones-del-dia.component';
import { ConsultaPremiosComponent } from './consulta-premios/consulta-premios.component';
import { HttpClientModule } from '@angular/common/http';
import { PremioRaspaService } from './premio-raspa.service';
import { FormsModule } from '@angular/forms';
import { ValidacionFraccionesService } from './validacion-fracciones.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidacionesCedulaService } from './validaciones-cedula.service';
import { FraccionesProcesoDevolucionComponent } from './fracciones-proceso-devolucion/fracciones-proceso-devolucion.component';
import { DevolucionFraccionesService } from './devolucion-fracciones.service';


const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'premiosRaspa', component: ComponentPremiosComponent },
  { path: 'inventarioRaspa', component: InventarioRaspaComponent},
  { path: 'validacionFracciones', component: ComponentValidacionFraccionesComponent},
  { path: 'inventarioLoteriaFisica', component: InventarioLoteriaFisicaComponent },
  { path: 'transaccionesDelDia', component: TransaccionesDelDiaComponent},
  { path: 'consultaPremios', component: ConsultaPremiosComponent },
  { path: 'devolucionFracciones', component: FraccionesProcesoDevolucionComponent},

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
    TransaccionesDelDiaComponent,
    ConsultaPremiosComponent,
    FraccionesProcesoDevolucionComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    InventarioRaspaComponent,
    PremioRaspaService,
    ValidacionFraccionesService, 
    ValidacionesCedulaService,
    DevolucionFraccionesService
    
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
