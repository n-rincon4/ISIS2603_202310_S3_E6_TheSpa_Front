import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloListComponent } from './articulo-list/articulo-list.component';
import { ArticuloDetailComponent } from './articulo-detail/articulo-detail.component';
import { RouterModule } from '@angular/router';
import { ArticuloRoutingModule } from './articulo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ArticuloRoutingModule
  ],
  exports: [ArticuloListComponent, ArticuloDetailComponent],
  declarations: [ArticuloListComponent, ArticuloDetailComponent]
})
export class ArticuloModule { }
