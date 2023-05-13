import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeListComponent } from './sede-list/sede-list.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';
import { RouterModule } from '@angular/router';
import { SedeRoutingModule } from './sede-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SedeRoutingModule,
    FormsModule
  ],
  declarations: [SedeListComponent, SedeDetailComponent],
  exports: [SedeListComponent, SedeDetailComponent]
})
export class SedeModule { }
