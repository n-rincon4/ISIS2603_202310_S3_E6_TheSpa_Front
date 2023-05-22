import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioExtraDetail } from '../servicioExtra-detail';
import { ServicioExtraService } from '../servicioExtra.service';

@Component({
  selector: 'app-servicioExtra-detail',
  templateUrl: './servicioExtra-detail.component.html',
  styleUrls: ['./servicioExtra-detail.component.css']
})
export class ServicioExtraDetailComponent implements OnInit {

  servicioExtraId!: string;
  @Input() servicioExtraDetail!: ServicioExtraDetail;

  constructor(private route: ActivatedRoute, private servicioExtraService: ServicioExtraService) { }

  getServicioExtra() {
    this.servicioExtraService.getService(this.servicioExtraId).subscribe(servicioExtra => {
      this.servicioExtraDetail = servicioExtra;
    })
  }

  ngOnInit() {
    if (this.servicioExtraDetail === undefined) {
      this.servicioExtraId = this.route.snapshot.paramMap.get('id')!
      if (this.servicioExtraId) {
        this.getServicioExtra();
      }
    }
  }

}
