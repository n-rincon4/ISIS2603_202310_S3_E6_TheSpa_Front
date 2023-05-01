import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloListComponent } from './articulo-list/articulo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ArticuloListComponent],
  declarations: [ArticuloListComponent]
})
export class ArticuloModule { }
