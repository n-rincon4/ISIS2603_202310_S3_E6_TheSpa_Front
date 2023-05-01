/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrabajadorService } from './trabajador.service';

describe('Service: Trabajador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrabajadorService]
    });
  });

  it('should ...', inject([TrabajadorService], (service: TrabajadorService) => {
    expect(service).toBeTruthy();
  }));
});
