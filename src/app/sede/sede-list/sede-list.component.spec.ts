/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SedeListComponent } from './sede-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import faker from '@faker-js/faker';
import { ServicioDetail } from 'src/app/servicio/servicio-detail';
import { ServicioListComponent } from 'src/app/servicio/servicio-list/servicio-list.component';
import { SedeDetail } from '../sede-detail';

describe('SedeListComponent', () => {
  let component: SedeListComponent;
  let fixture: ComponentFixture<SedeListComponent>;
  let debug: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [SedeListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeListComponent);
    component = fixture.componentInstance;

    let testService: Array<SedeDetail> = [];

    for (let i = 0; i < 3; i++) {
      testService[i] = new SedeDetail(
        faker.datatype.number(),
        faker.lorem.words(5),
        faker.lorem.words(10),
        [],
        [],
        [],
        [],
        [],
        undefined as any
      );
    }

    component.sedes = testService;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of sedes', () => {
    expect(component.sedes.length).toEqual(3);
  }

  );
});
