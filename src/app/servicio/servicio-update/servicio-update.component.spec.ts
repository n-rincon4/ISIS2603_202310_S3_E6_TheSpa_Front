/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ServicioUpdateComponent } from './servicio-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioService } from '../servicio.service';

describe('ServicioUpdateComponent', () => {
  let component: ServicioUpdateComponent;
  let fixture: ComponentFixture<ServicioUpdateComponent>;
  let debug: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [ServicioUpdateComponent],
      providers: [ServicioService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with id submit and with type submit', () => {
    expect(debug.query(By.css('#submit')).attributes['type']).toEqual('submit');
  });

  it('should have an input with id nombre and with formControlName nombre ', () => {
    expect(debug.query(By.css('#nombre')).attributes['formControlName']).toEqual(
      'nombre'
    );
  }
  );

  it('should have an input with id descripcion and with formControlName descripcion ', () => {
    expect(
      debug.query(By.css('#descripcion')).attributes['formControlName']
    ).toEqual('descripcion');
  }
  );

  it('should have an input with id precio and with formControlName precio ', () => {
    expect(debug.query(By.css('#precio')).attributes['formControlName']).toEqual(
      'precio'
    );
  }
  );

  it('should have an input with id duracion and with formControlName duracion ', () => {
    expect(
      debug.query(By.css('#duracion')).attributes['formControlName']
    ).toEqual('duracion');
  }
  );

  it('should have an input with id restricciones and with formControlName restricciones ', () => {
    expect(
      debug.query(By.css('#restricciones')).attributes['formControlName']
    ).toEqual('restricciones');
  }
  );




});
