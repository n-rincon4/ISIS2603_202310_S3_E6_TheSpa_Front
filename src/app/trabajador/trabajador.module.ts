import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorComponent } from './trabajador.component';
import { ImageSliderModule } from '../imageSlider/imageSlider.module';
import { RouterModule } from '@angular/router';
import { TrabajadorRoutingModule } from './trabajador-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ImageSliderModule,
    RouterModule,
    TrabajadorRoutingModule
  ],
  declarations: [TrabajadorComponent],
  exports: [TrabajadorComponent]
})
export class TrabajadorModule { }
