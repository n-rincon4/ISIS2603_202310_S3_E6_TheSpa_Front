import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css'],
})
export class ServicioCreateComponent implements OnInit {
  servicioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private servicioService: ServicioService,
    private router: Router
  ) { }

  createServicio(servicio: Servicio) {
    if (!this.servicioForm.valid) return;

    this.servicioService.createService(servicio).subscribe((servicio) => {
      console.info('The servicio was created: ', servicio);
      this.toastr.success('Confirmation', 'Servicio created');
      this.router.navigate(['/servicios/list']);
      this.servicioForm.reset();
    });
  }

  cancelCreation() {
    this.toastr.warning("The servicio wasn't created", 'Servicio creation');
    this.servicioForm.reset();
  }

  ngOnInit() {
    // this.servicioForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   image: ['', Validators.required],
    //   birthDate: ['', Validators.required],
    //   description: ['', [Validators.required, Validators.maxLength(100)]],
    // });
  }
}
