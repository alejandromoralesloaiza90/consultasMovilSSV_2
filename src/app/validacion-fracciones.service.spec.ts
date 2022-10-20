import { TestBed } from '@angular/core/testing';

import { ValidacionFraccionesService } from './validacion-fracciones.service';

describe('ValidacionFraccionesService', () => {
  let service: ValidacionFraccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacionFraccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
