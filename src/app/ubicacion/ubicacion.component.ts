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
      this.ubicaciones = ubicaciones;
    });
    // this.ubicaciones = [
    //   {
    //     id: 1,
    //     ciudad: "Bogota",
    //     direccion: "Carrera 1",
    //     latitud: 4.603014,
    //     longitud: -74.065227
    //   },
    //   {
    //     id: 2,
    //     ciudad: "Bogota",
    //     direccion: "Carrera 2",
    //     latitud: 4.6080,
    //     longitud: -74.066409
    //   }
    // ];
  }

  selectUbicacion(ubicacion: Ubicacion) {
    console.log("UBICACION:", ubicacion)
    this.selectedUbicacion = ubicacion;
  }

}
