/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TrabajadorComponent } from './trabajador.component';
import { TrabajadorDetail } from './trabajador-detail';

describe('TrabajadorComponent', () => {
  let component: TrabajadorComponent;
  let fixture: ComponentFixture<TrabajadorComponent>;
  let debug: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [TrabajadorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorComponent);
    component = fixture.componentInstance;

    let testTrabajador: Array<TrabajadorDetail> = [];

    for (let i = 0; i < 3; i++) {
      testTrabajador[i] = new TrabajadorDetail(
        faker.datatype.number(),
        faker.lorem.words(5),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.boolean(),
        [],
        []
      );
    }

    component.trabajadores = testTrabajador;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of trabajadores', () => {
    expect(component.trabajadores.length).toEqual(3);
  });
});
