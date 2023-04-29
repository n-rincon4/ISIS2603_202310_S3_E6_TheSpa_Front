import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorComponent } from './trabajador.component';
import { ImageSliderModule } from '../imageSlider/imageSlider.module';

@NgModule({
  imports: [
    CommonModule,
    ImageSliderModule
  ],
  declarations: [TrabajadorComponent],
  exports: [TrabajadorComponent]
})
export class TrabajadorModule { }
