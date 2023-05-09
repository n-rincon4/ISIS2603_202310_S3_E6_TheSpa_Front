import { Component, OnInit } from '@angular/core';
import { ServicioExtra } from '../servicioExtra';
import { ServicioExtraService } from '../servicioExtra.service';

@Component({
  selector: 'app-servicioExtra-list',
  templateUrl: './servicioExtra-list.component.html',
  styleUrls: ['./servicioExtra-list.component.css']
})

export class ServicioExtraListComponent implements OnInit {

  serviciosExtra: ServicioExtra[] = [];

  constructor(private servicioExtraService: ServicioExtraService) { }

  getServices(): void {
    this.servicioExtraService.getServices().subscribe(serviciosExtra => this.serviciosExtra = serviciosExtra);
  }

  ngOnInit() {
    this.getServices();
  }

}

