import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { PackModule } from './pack/pack.module';
import { ServicioModule } from './servicio/servicio.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloModule } from './articulo/articulo.module';
import { SedeModule } from './sede/sede.module';
import { ImageSliderModule } from './imageSlider/imageSlider.module';

@NgModule({
  declarations: [
    AppComponent,
    SedeComponent,
    TrabajadorComponent,
    PackComponent,
    TrabajadorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicioModule,
    ArticuloModule,
    HttpClientModule
    PackModule,
    HttpClientModule,
    SedeModule,
    ImageSliderModule,
    TrabajadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
