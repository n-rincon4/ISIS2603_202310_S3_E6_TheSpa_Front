import { Component, OnInit } from '@angular/core';
import { UbicacionService } from './ubicacion.service';
import { Ubicacion } from './ubicacion';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  center: google.maps.LatLngLiteral = {lat: 4.603014, lng: -74.065227};
  zoom = 10;

  ubicaciones: Ubicacion[] = [];

  selectedUbicacion: Ubicacion | undefined;

  markerOptions: google.maps.MarkerOptions = {
    icon: {
      url: "/assets/spa-marker.png",
      scaledSize: new google.maps.Size(40, 40),
    }
  };

  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit() {
    this.getUbicaciones();
  }

  getUbicaciones() {
    this.ubicacionService.getUbicaciones().subscribe(ubicaciones => {
      this.ubicaciones = ubicaciones.map(ubicacion => {
        ubicacion.longitud = - ubicacion.longitud;
        return ubicacion;
      });
    });
  }

  selectUbicacion(ubicacion: Ubicacion) {
    console.log("UBICACION:", ubicacion)
    this.selectedUbicacion = ubicacion;
  }

}
