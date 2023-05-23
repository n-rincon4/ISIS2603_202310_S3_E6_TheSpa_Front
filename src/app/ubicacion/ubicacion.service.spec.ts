/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { UbicacionService } from './ubicacion.service';

describe('Service: Sede', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UbicacionService]
    });
  });

  it('should ...', inject([UbicacionService], (sede: UbicacionService) => {
    expect(sede).toBeTruthy();
  }));
});
