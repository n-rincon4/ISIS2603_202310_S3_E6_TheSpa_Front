import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicioExtraRoutingModule } from './servicioExtra-routing.module';
import { ServicioExtraListComponent } from './servicioExtra-list/servicioExtra-list.component';

@NgModule({
  imports: [
    CommonModule
    , RouterModule
    , ServicioExtraRoutingModule
  ],
  declarations: [ServicioExtraListComponent],
  exports: [ServicioExtraListComponent]
})

export class ServicioModule { }
