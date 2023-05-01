import { Component, OnInit } from '@angular/core';
import { SedeDetail } from '../sede-detail';
import { SedeService } from '../sede.service';
@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit {

  sedes: SedeDetail[] = [];
  selectedSede: SedeDetail = undefined as any;
  selected = false;

  constructor(private sedeService: SedeService) { }

  getSedes(): void {
    this.sedeService.getSedes().subscribe(sedes => this.sedes = sedes);
  }

  selectService(sede: SedeDetail): void {
    this.selected = true;
    this.selectedSede = sede;
  }

  ngOnInit() {

    this.getSedes();

  }

}
