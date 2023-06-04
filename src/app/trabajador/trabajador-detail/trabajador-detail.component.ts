import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrabajadorDetail } from '../trabajador-detail';
import { TrabajadorService } from '../trabajador.service';

@Component({
  selector: 'app-trabajador-detail',
  templateUrl: './trabajador-detail.component.html',
  styleUrls: ['./trabajador-detail.component.css']
})
export class TrabajadorDetailComponent implements OnInit {

  trabajadorId!: string;
  @Input() trabajadorDetail!: TrabajadorDetail;

  constructor(private route: ActivatedRoute, private trabajadorService: TrabajadorService) { }

  getTrabajador() {
    let id: number = +this.trabajadorId;
    this.trabajadorService.getTrabajador(id).subscribe(trabajador => {
      this.trabajadorDetail = <TrabajadorDetail>trabajador;
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0);


    if (this.trabajadorDetail === undefined) {
      this.trabajadorId = this.route.snapshot.paramMap.get('id')!
      if (this.trabajadorId) {
        this.getTrabajador();
      }
    }
  }

  deleteTrabajador() {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar?');
    if (confirmacion === true) {
      this.trabajadorService.deleteTrabajador(this.trabajadorId).subscribe(() => {
        this.ngOnInit();
      });
    }
    else {
      alert('No se eliminó el trabajador');
    }
  }
}
