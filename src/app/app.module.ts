import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentPremiosComponent } from './component-premios/component-premios.component';
import { ComponentValidacionFraccionesComponent } from './component-validacion-fracciones/component-validacion-fracciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPremiosComponent,
    ComponentValidacionFraccionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
