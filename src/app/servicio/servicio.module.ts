import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';
import { RouterModule } from '@angular/router';
import { ServicioRoutingModule } from './servicio-routing.module';

@NgModule({
  imports: [
    CommonModule
    , RouterModule
    , ServicioRoutingModule
  ],
  declarations: [ServicioListComponent, ServicioDetailComponent],
  exports: [ServicioListComponent, ServicioDetailComponent]
})
export class ServicioModule { }
