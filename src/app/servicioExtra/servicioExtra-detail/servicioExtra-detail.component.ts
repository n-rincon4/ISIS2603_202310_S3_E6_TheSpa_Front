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

  pakId!: string;
  @Input() servicioExtraDetail!: ServicioExtraDetail;

  constructor(private rout: ActivatedRoute, private servicioExtraService: ServicioExtraService) { }

  getServicioExtra() {
    this.servicioExtraService.getService(this.pakId).subscribe(servicioExtra => { this.servicioExtraDetail = servicioExtra; })
  }

  ngOnInit() {
    if (this.servicioExtraDetail === undefined) {
      this.pakId = this.rout.snapshot.paramMap.get('id')!
      if (this.pakId) {
        this.getServicioExtra();
      }
    }
  }

}
