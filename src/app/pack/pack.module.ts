import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackDetailComponent } from './pack-detail/pack-detail.component';
import { PackListComponent } from './pack-list/pack-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PackListComponent, PackDetailComponent],
  exports: [PackListComponent, PackDetailComponent]
})
export class PackModule { }
