import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicioListComponent, ServicioDetailComponent],
})
export class ServicioModule { }
