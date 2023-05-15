import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pack } from '../pack';
import { PackDetail } from '../pack-detail';
import { PackService } from '../pack.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sede } from 'src/app/sede/sede';
import { SedeService } from 'src/app/sede/sede.service';

@Component({
  selector: 'app-pack-create',
  templateUrl: './pack-create.component.html',
  styleUrls: ['./pack-create.component.css'],
})
export class PackCreateComponent implements OnInit {
  packForm!: FormGroup;
  sede!: FormGroup;
  sedes!: Sede[]

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private packService: PackService,
    private sedeService: SedeService,
    private router: Router
  ) { }

  getSedes(): void {
    this.sedeService.getSedes().subscribe(sedes => {
      this.sedes = sedes;
    }, err => {
      this.toastr.error(err, 'Error');
    });
  }

  createPack(pack: PackDetail) {
    console.log(pack);
    if (!this.packForm.valid) return;
    // convierte el atributo sede en un FormGroup, cuyo id será el id de la sede
    this.sede = this.formBuilder.group({
      id: [pack.sede, [Validators.required]]
    });
    pack.sede = this.sede.value;


    this.packService.createPack(pack).subscribe((pack) => {
      console.info('The pack was created: ', pack);
      this.toastr.success('Confirmation', 'Pack created');
      this.router.navigate(['/packs/list']);
      this.packForm.reset();
    }, err => {
      this.toastr.error(err, 'Error');
    }
    );
  }

  cancelCreation() {
    this.toastr.warning("The pack wasn't created", 'Pack creation');
    this.packForm.reset();
  }

  ngOnInit() {

    this.getSedes();

    this.packForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.maxLength(100)]],
      sede: ['', [Validators.required]],
      restricciones: ['', [Validators.required, Validators.maxLength(100)]],
      // horaDeInicio checks if the value is a valid time
      horaInicio: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      // duracion checks if the value is numeric
      duracion: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      // precio checks if the value is numeric, can be decimal
      precio: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      // imagen checks if the value is a valid URL, meaning it must start with http:// or https://    
      imagen: ['', [Validators.required, Validators.pattern('^(http|https)://.*$')]],
    });
  }
}
