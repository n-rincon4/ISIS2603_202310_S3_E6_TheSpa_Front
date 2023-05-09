import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SedeRoutingModule } from './sede/sede-routing.module';
import { AppComponent } from './app.component';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { PackModule } from './pack/pack.module';
import { ServicioModule } from './servicio/servicio.module';
import { HttpClientModule } from '@angular/common/http';
import { SedeModule } from './sede/sede.module';
import { ArticuloModule } from './articulo/articulo.module';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { HomeComponent } from './home/home.component';
import { ServicioExtraModule } from './servicioExtra/servicioExtra.module';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SedeRoutingModule,
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
    ServicioExtraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
