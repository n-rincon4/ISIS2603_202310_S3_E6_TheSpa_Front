import { Component, Input, OnInit } from '@angular/core';
import { ServicioExtraDetail } from '../servicioExtra-detail';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioExtra } from '../servicioExtra';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioExtraService } from '../servicioExtra.service';

@Component({
  selector: 'app-servicioExtra-update',
  templateUrl: './servicioExtra-update.component.html',
  styleUrls: ['./servicioExtra-update.component.css']
})
export class ServicioExtraUpdateComponent implements OnInit {

  servicioExtraId!: string;
  @Input() servicioExtraDetail!: ServicioExtraDetail;
  servicioExtraForm!: FormGroup;
  servicioExtra!: FormGroup;
  serviciosExtra!: ServicioExtra[]

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private servicioExtraService: ServicioExtraService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  getServicioExtra() {
    this.servicioExtraService.getServicioExtra(this.servicioExtraId).subscribe(servicioExtra => {
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

    this.getServiciosExtra();


    this.servicioExtraForm = this.formBuilder.group({
      precio: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      // imagen checks if the value is a valid URL, meaning it must start with http:// or https://
      imagen: ['', [Validators.required, Validators.pattern('^(http|https)://.*$')]],

    });
  }

  updateServicioExtra(servicioExtra: ServicioExtraDetail) {
    console.log(servicioExtra);
    if (!this.servicioExtraForm.valid) return;

    servicioExtra.nombre = this.servicioExtraDetail.nombre;
    servicioExtra.descripcion = this.servicioExtraDetail.descripcion;
    // parsea el precio a un number
    servicioExtra.precio = Number(servicioExtra.precio);
    servicioExtra.imagen = servicioExtra.imagen;
    servicioExtra.disponible = true;
    servicioExtra.sede = this.servicioExtraDetail.sede;

    this.servicioExtraService.updateServicioExtra(servicioExtra, this.servicioExtraId).subscribe((servicioExtra) => {
      console.info('The extra service was updated: ', servicioExtra);
      this.toastr.success('Confirmation', 'Servicio Extra updated');
      this.router.navigate(['/serviciosExtra/list']);
      this.servicioExtraForm.reset();
    }, err => {
      this.toastr.error(err, 'Error');
    }
    );
  }

  cancelCreation() {
    this.toastr.warning("The extra service wasn't updated", 'ServicioExtra update');
    this.servicioExtraForm.reset();
  }

  getServiciosExtra(): void {
    this.servicioExtraService.getServiciosExtra().subscribe(serviciosExtra => {
      this.serviciosExtra = serviciosExtra;
    }, err => {
      this.toastr.error(err, 'Error');
    });
    console.log(this.serviciosExtra);
  }

}
