import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slide.interface';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {

  slides: SlideInterface[] = [
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/rainn-wilson-dwight-schrute-the-office.jpg', title: 'Dwight Schrute'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/brian-baumgartner-kevin-malone-the-office.jpg', title: 'Kevin Malone'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/angela-kinsey-angela-martin-the-office.jpg', title: 'Angela Martin'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/jenna-fischer-pam-beesly-the-office.jpg', title: 'Pam Beesly'},
    {url: 'https://www.officetally.com/wp-content/uploads/2009/03/john-krasinski-jim-halpert-the-office.jpg', title: 'Jim Halpert'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
