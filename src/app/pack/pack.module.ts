import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackDetailComponent } from './pack-detail/pack-detail.component';
import { PackListComponent } from './pack-list/pack-list.component';
import { RouterModule } from '@angular/router';
import { PackRoutingModule } from './pack-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PackRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PackListComponent, PackDetailComponent],
  exports: [PackListComponent, PackDetailComponent]
})
export class PackModule { }
