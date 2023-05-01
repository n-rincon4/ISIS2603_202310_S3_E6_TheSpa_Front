import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slide.interface';
import { TrabajadorService } from './trabajador.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {

  trabajadores: any[] = [];

  slides: SlideInterface[] = [];

  /*
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/rainn-wilson-dwight-schrute-the-office.jpg', title: 'Dwight Schrute'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/brian-baumgartner-kevin-malone-the-office.jpg', title: 'Kevin Malone'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/angela-kinsey-angela-martin-the-office.jpg', title: 'Angela Martin'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/jenna-fischer-pam-beesly-the-office.jpg', title: 'Pam Beesly'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/john-krasinski-jim-halpert-the-office.jpg', title: 'Jim Halpert'}

  */

  constructor(private trabajadorService: TrabajadorService) { }

  getTrabajadores(): void {
    this.trabajadorService.getTrabajadores().subscribe(trabajadores => this.trabajadores = trabajadores);
  }

  setSlides(): void {
    this.slides = [];
    this.trabajadorService.getTrabajadores().subscribe(trabajadores => {
      for (let i = 0; i < trabajadores.length; i++) {
        if (trabajadores[i].enHallOfFame){
          this.slides.push({url: trabajadores[i].foto, title: trabajadores[i].nombre});
        }
      }
    }
    );
  }

  ngOnInit() {
    this.getTrabajadores();
    this.setSlides();
  }

}
