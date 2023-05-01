import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  articulosDeRopa: Array<Articulo> = [];
  constructor(private articuloService: ArticuloService) { }

  getArticulosDeRopa(): void {
    this.articuloService.getArticulosDeRopa().subscribe((articulos) => {
      this.articulosDeRopa = articulos;
    });
  }

  ngOnInit() {
    this.getArticulosDeRopa();
  }

}
