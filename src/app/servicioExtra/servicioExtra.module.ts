import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicioExtraRoutingModule } from './servicioExtra-routing.module';
import { ServicioExtraListComponent } from './servicioExtra-list/servicioExtra-list.component';
import { ServicioExtraDetailComponent } from './servicioExtra-detail/servicioExtra-detail.component';

@NgModule({
  imports: [
    CommonModule
    , RouterModule
    , ServicioExtraRoutingModule
  ],
  declarations: [ServicioExtraListComponent, ServicioExtraDetailComponent],
  exports: [ServicioExtraListComponent, ServicioExtraDetailComponent]
})

export class ServicioExtraModule { }
