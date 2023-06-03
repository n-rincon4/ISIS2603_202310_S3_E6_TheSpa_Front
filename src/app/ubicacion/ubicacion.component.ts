import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  center: google.maps.LatLngLiteral = {lat: 4, lng: -72};
  zoom = 4;

  ubicaciones = [
    {
      lat: 4.603014,
      lng: -74.065227
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
