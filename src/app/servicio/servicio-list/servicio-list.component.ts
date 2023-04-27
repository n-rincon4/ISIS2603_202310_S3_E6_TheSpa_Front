import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ServicioDetail } from '../servicio-detail';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

  servicios: ServicioDetail[] = [];
  selectedService: ServicioDetail = undefined as any;
  selected = false;

  constructor(private servicioService: ServicioService) { }

  getServices(): void {
    this.servicioService.getServices().subscribe(servicios => this.servicios = servicios);
  }

  selectService(servicio: ServicioDetail): void {
    this.selected = true;
    this.selectedService = servicio;
  }

  ngOnInit() {
    this.getServices();
  }

}
