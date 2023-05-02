import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { PackModule } from './pack/pack.module';
import { ServicioModule } from './servicio/servicio.module';
import { HttpClientModule } from '@angular/common/http';
import { SedeModule } from './sede/sede.module';
import { ArticuloModule } from './articulo/articulo.module';
import { ImageSliderModule } from './imageSlider/imageSlider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicioModule,
    ArticuloModule,
    HttpClientModule,
    PackModule,
    HttpClientModule,
    SedeModule,
    ImageSliderModule,
    TrabajadorModule,
    PackModule,
    HttpClientModule,
    SedeModule,
    ArticuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
