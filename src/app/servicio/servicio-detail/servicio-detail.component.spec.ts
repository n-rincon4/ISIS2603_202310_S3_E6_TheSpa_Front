/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ServicioDetailComponent } from './servicio-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServicioDetail } from '../servicio-detail';
import { Sede } from 'src/app/sede/sede';
import { Trabajador } from 'src/app/trabajador/trabajador';
import { Pack } from 'src/app/pack/pack';

describe('AuthorDetailComponent', () => {
  let component: ServicioDetailComponent;
  let fixture: ComponentFixture<ServicioDetailComponent>;
  let debug: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ServicioDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDetailComponent);
    component = fixture.componentInstance;

    let testBooks: Array<Trabajador> = [];
    let testPacks: Array<Pack> = [];

    let sede = new Sede(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    for (let i = 0; i < 2; i++) {
      testBooks[i] = new Trabajador(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.boolean()

      );
    }

    component.servicioDetail = new ServicioDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.paragraph(),
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.datatype.number(),
      faker.lorem.paragraph(),
      faker.datatype.boolean(),
      faker.datatype.string(),
      sede,
      testBooks,
      testPacks

    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.servicioDetail.nombre
    );
  });

  it('should have an img element with src = servicioDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.servicioDetail.imagen
    );
  });

  it('should have a <p> tag with component.servicioDetail.name', () => {
    const componentElement: HTMLElement = debug.query(By.css('p.h3.p-2.author-name')).nativeElement;
    expect(componentElement.textContent).toContain(component.servicioDetail.nombre);
  });

  it('should have one dd tag for component.servicioDetail.description', () => {
    const allDt: DebugElement[] = debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'Bio';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.servicioDetail.descripcion);
  });



});
