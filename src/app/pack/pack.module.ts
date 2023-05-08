import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackDetailComponent } from './pack-detail/pack-detail.component';
import { PackListComponent } from './pack-list/pack-list.component';
import { RouterModule } from '@angular/router';
import { PackRoutingModule } from './pack-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PackRoutingModule
  ],
  declarations: [PackListComponent, PackDetailComponent],
  exports: [PackListComponent, PackDetailComponent]
})
export class PackModule { }
