/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ServicioExtraCreateComponent } from './servicioExtra-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioExtraService } from '../servicioExtra.service';

describe('ServicioExtraCreateComponent', () => {
  let component: ServicioExtraCreateComponent;
  let fixture: ComponentFixture<ServicioExtraCreateComponent>;
  let debug: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [ServicioExtraCreateComponent],
      providers: [ServicioExtraService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioExtraCreateComponent);
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
  });

  it('should have an input with id descripcion and with formControlName descripcion ', () => {
    expect(
      debug.query(By.css('#descripcion')).attributes['formControlName']
    ).toEqual('descripcion');
  });

  it('should have an input with id precio and with formControlName precio ', () => {
    expect(debug.query(By.css('#precio')).attributes['formControlName']).toEqual(
      'precio'
    );
  });

  it('should have an input with id imagen and with formControlName imagen ', () => {
    expect(
      debug.query(By.css('#imagen')).attributes['formControlName']
    ).toEqual('imagen');
  });
});
