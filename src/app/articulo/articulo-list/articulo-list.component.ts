import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticuloService } from '../articulo.service';
import { ArticuloDetail } from '../articulo-detail';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {
  articulosDeRopa: ArticuloDetail[] = [];
  selectedArticulo: ArticuloDetail = undefined as any;
  selected = false;

  constructor(private articuloService: ArticuloService) { }

  getArticulosDeRopa(): void {
    this.articuloService.getArticulosDeRopa().subscribe((articulos) => {
      this.articulosDeRopa = <ArticuloDetail[]>articulos;
    });
  }

  selectArticulo(articulo: ArticuloDetail) {
    this.selected = true;
    this.selectedArticulo = articulo;
  }

  ngOnInit() {
    this.getArticulosDeRopa();
  }

}
