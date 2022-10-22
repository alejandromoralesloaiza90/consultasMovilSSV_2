import { TestBed } from '@angular/core/testing';

import { DevolucionFraccionesService } from './devolucion-fracciones.service';

describe('DevolucionFraccionesService', () => {
  let service: DevolucionFraccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevolucionFraccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
