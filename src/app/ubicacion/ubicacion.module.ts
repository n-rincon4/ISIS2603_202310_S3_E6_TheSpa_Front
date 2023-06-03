import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
UbicacionComponent
  ],
  declarations: [UbicacionComponent]
})
export class UbicacionModule { }
