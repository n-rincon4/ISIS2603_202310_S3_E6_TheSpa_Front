import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { UbicacionDetailComponent } from './ubicacion-detail/ubicacion-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
UbicacionComponent
  ],
  declarations: [UbicacionComponent, UbicacionDetailComponent]
})
export class UbicacionModule { }
