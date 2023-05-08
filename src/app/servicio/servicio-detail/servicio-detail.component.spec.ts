/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ServicioDetailComponent } from './servicio-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServicioDetail } from '../servicio-detail';
import { SedeDetail } from 'src/app/sede/sede-detail';
import { PackDetail } from 'src/app/pack/pack-detail';
import { TrabajadorDetail } from 'src/app/trabajador/trabajador-detail';

describe('ServicioDetailComponent', () => {
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

    let testTrabajadores: TrabajadorDetail[] = [];

    let testPacks: PackDetail[] = [];

    for (let i = 0; i < 3; i++) {
      testTrabajadores.push(new TrabajadorDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.boolean(),
        [],
        []
      ));


      component.servicioDetail = new ServicioDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.number(),
        


      fixture.detectChanges();
      debug = fixture.debugElement;
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.servicioDetail.name
    );
  });

  it('should have an img element with src = servicioDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.servicioDetail.image
    );
  });

  it('should have a <p> tag with component.servicioDetail.name', () => {
    const componentElement: HTMLElement = debug.query(By.css('p.h3.p-2.servicio-name')).nativeElement;
    expect(componentElement.textContent).toContain(component.servicioDetail.name);
  });

  it('should have one dd tag for component.servicioDetail.description', () => {
    const allDt: DebugElement[] = debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'Bio';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.servicioDetail.description);
  });

  it('should have one dd tag for component.servicioDetail.birthDate', () => {
    const allDt: DebugElement[] = debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'BirthDay';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.servicioDetail.birthDate);
  });

  it('should have a tag with component.servicioDetail.books[i].name', () => {
    for (let i = 0; i < component.servicioDetail.books.length; i++) {
      const componentElement: HTMLElement = debug.queryAll(By.css('ul > li'))[i].nativeElement;
      expect(componentElement.textContent).toContain(component.servicioDetail.books[i].name);
    }
  });

});
