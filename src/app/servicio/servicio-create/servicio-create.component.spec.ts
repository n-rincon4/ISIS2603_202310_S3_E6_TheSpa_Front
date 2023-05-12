/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ServicioCreateComponent } from './servicio-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioService } from '../servicio.service';

describe('ServicioCreateComponent', () => {
  let component: ServicioCreateComponent;
  let fixture: ComponentFixture<ServicioCreateComponent>;
  let debug: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [ServicioCreateComponent],
      providers: [ServicioService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioCreateComponent);
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

  it('should have an input with id name and with formControlName name', () => {
    expect(debug.query(By.css('#name')).attributes['formControlName']).toEqual(
      'name'
    );
  });

  it('should have an input with id image and with formControlName image', () => {
    expect(debug.query(By.css('#image')).attributes['formControlName']).toEqual(
      'image'
    );
  });

  it('should have an input with id birthDate and with formControlName birthDate', () => {
    expect(
      debug.query(By.css('#birthDate')).attributes['formControlName']
    ).toEqual('birthDate');
  });

  it('should have an input with id description and with formControlName description', () => {
    expect(
      debug.query(By.css('#description')).attributes['formControlName']
    ).toEqual('description');
  });
});
