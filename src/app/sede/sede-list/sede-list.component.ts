import { Component, Renderer2, OnInit } from '@angular/core';
import { SedeDetail } from '../sede-detail';
import { SedeService } from '../sede.service';


@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit {

  isOpen: boolean[] = [];

  sedes: SedeDetail[] = [];
  selectedSede: SedeDetail = undefined as any;
  selected = false;
  searchText: string = ''; // Add the searchText property for filtering

  constructor(private sedeService: SedeService) { }



  getSedes(): void {
    this.sedeService.getSedes().subscribe(sedes => {
      // Apply the filter based on the searchText property
      this.sedes = sedes.filter(sede => sede.nombre.toLowerCase().includes(this.searchText.toLowerCase()));
    });
  }

  onSearchInput(value: string) {
    this.searchText = value;
  }

  search() {
    console.log(this.searchText);
    this.getSedes();

  }

  selectSede(sede: SedeDetail) {
    this.selected = true;
    this.selectedSede = sede;
  }

  ngOnInit() {

    this.isOpen = new Array(2).fill(false);
    this.getSedes();

  }

  toggleAccordion(index: number) {
    this.isOpen[index] = !this.isOpen[index]; // Cambiamos el valor del índice seleccionado
  }

}
