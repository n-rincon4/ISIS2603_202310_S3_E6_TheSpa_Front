import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioDetail } from '../servicio-detail';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-servicio-detail',
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {


  authorId!: string;
  @Input() servicioDetail!: ServicioDetail;

  constructor(
    private route: ActivatedRoute,
    private servicioService: ServicioService
  ) { }

  getAuthor() {
    this.servicioService.getService(this.authorId).subscribe(servicio => {
      this.servicioDetail = servicio;
    })
  }

  ngOnInit() {
    if (this.servicioDetail === undefined) {
      this.authorId = this.route.snapshot.paramMap.get('id')!
      if (this.authorId) {
        this.getAuthor();
      }
    }
  }

}
