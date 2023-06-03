import { Component, Input, OnInit } from '@angular/core';
import { UbicacionDetail } from '../ubicacion-detail';
import { Ubicacion } from '../ubicacion';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-ubicacion-detail',
  templateUrl: './ubicacion-detail.component.html',
  styleUrls: ['./ubicacion-detail.component.css']
})
export class UbicacionDetailComponent implements OnInit {

  @Input() ubicacion: Ubicacion | undefined;

  ubicacionDetail: UbicacionDetail | undefined;

  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit() {
    this.getUbicacionDetail();
  }

  getUbicacionDetail() {
    this.ubicacionService.getUbicacionDetail(this.ubicacion?.id || 0).subscribe(
      ubicacionDetail => {
        this.ubicacionDetail = ubicacionDetail;
      }
    );
  }

}
