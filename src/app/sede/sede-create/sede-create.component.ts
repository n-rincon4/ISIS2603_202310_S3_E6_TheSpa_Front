import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioDetail } from 'src/app/servicio/servicio-detail';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Sede } from '../sede';
import { SedeService } from '../sede.service';
import { Ubicacion } from 'src/app/ubicacion/ubicacion';
import { TrabajadorService } from 'src/app/trabajador/trabajador.service';
import { Trabajador } from 'src/app/trabajador/trabajador';
import { UbicacionService } from 'src/app/ubicacion/ubicacion.service';
import { Servicio } from 'src/app/servicio/servicio';
import { UbicacionDetail } from 'src/app/ubicacion/ubicacion-detail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sede-create',
  templateUrl: './sede-create.component.html',
  styleUrls: ['./sede-create.component.css']
})
export class SedeCreateComponent implements OnInit {
  servicioForm!: FormGroup;
  obserbUb: number=0;
  sede!: FormGroup;
  sedes!: Sede[];
  servicios!: Servicio[];
  ubicacion!: FormGroup;
  ubicaciones!: Ubicacion[];
  trabajadores!: Trabajador[];
  ubId!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private servicioService: ServicioService,
    private sedeService: SedeService,
    private router: Router,
    private trabajadorService: TrabajadorService,
    private ubicacionService: UbicacionService
  ) { }

  getSedes(): void {
    this.sedeService.getSedes().subscribe(sedes => {
      this.sedes = sedes;
    }, err => {
      this.toastr.error(err, 'Error');
    });
    this.getServicios();


  }

  getTrabajadores(): void {
    this.trabajadorService.getTrabajadores().subscribe(trabajadores => {
      this.trabajadores = trabajadores;
    }, err => {
      this.toastr.error(err, 'Error');
    });
  }

  getUbicaciones(): void {
    this.ubicacionService.getUbicaciones().subscribe(ubicaciones => {
      this.ubicaciones = ubicaciones;
    }, err => {
      this.toastr.error(err, 'Error');
    });
  }

  getServicios(){
    this.servicioService.getServices().subscribe(servicioss => {
      this.servicios = servicioss;
      console.log(this.servicios);
    }, err => {
      this.toastr.error(err, 'Error');
    });
  }

  createUbicacion(ubicacionIn: Ubicacion): number {



    this.ubicacionService.createUbicacion(ubicacionIn).subscribe((ubicacionOut) => {
      this.obserbUb = ubicacionOut.id;
      console.log('ubicacionOutId',ubicacionOut.id);
      console.info('The ubicacion was created: ', ubicacionOut);
      this.toastr.success('Confirmation', 'ubicacion created');


    }, err => {
      this.toastr.error(err, 'Error');
    }
    );


    console.log('vaina: ',this.obserbUb)
    return this.obserbUb;

  }

  createSede(any: any) {

    if (!this.servicioForm.valid) return;

    let idUb: number = 0;
    this.ubicacion = this.formBuilder.group({
      latitud: [parseFloat(any.latitud), [Validators.required]],
      longitud: [parseFloat(any.longitud), [Validators.required]],
      ciudad: [any.ciudad, [Validators.required]],
      direccion: [any.direccion, [Validators.required]]
    });

    // Create Ubicacion
    idUb = this.createUbicacion(this.ubicacion.value);
    console.log('idUbCreateSede',idUb)

    this.ubId = this.formBuilder.group({
      id: [idUb, [Validators.required]]
    })

    //Create sede with ubicacion id as input
    this.sede = this.formBuilder.group({
      nombre: [any.nombre, [Validators.required]],
      imagen: [any.imagen, [Validators.required]],
      ubicacion: [this.ubId,[Validators.required]]
    });

      this.sedeService.createSede(this.sede.value).subscribe((sede) => {
      console.info('The sede was created: ', sede);
      this.toastr.success('Confirmation', 'Sede created');
      this.router.navigate(['/sedes/list']);
      this.servicioForm.reset();
    }, err => {
      this.toastr.error(err, 'Error');
    }
    );

  }

  cancelCreation() {
    this.toastr.warning("The sede wasn't created", 'Servicio creation');
    this.servicioForm.reset();
  }

  ngOnInit() {

    this.getSedes();
    this.getTrabajadores();
    this.getUbicaciones();
    this.getServicios();


    this.servicioForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],

      latitud: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],

      longitud: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],

      ciudad: ['', [Validators.required, Validators.minLength(2)]],

      direccion: ['', [Validators.required, Validators.minLength(2)]],

      imagen: ['', [Validators.required, Validators.pattern('^(http|https)://.*$')]],
    });

  }
}
