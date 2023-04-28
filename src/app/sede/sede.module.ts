import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeListComponent } from './sede-list/sede-list.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SedeListComponent, SedeDetailComponent],
  exports: [SedeListComponent, SedeDetailComponent]
})
export class SedeModule { }
