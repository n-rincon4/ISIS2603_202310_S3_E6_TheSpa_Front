import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { PackModule } from './pack/pack.module';
import { ServicioModule } from './servicio/servicio.module';
import { HttpClientModule } from '@angular/common/http';
import { SedeModule } from './sede/sede.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicioModule,
    PackModule,
    HttpClientModule,
    SedeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
