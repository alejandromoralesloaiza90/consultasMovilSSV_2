import { TestBed } from '@angular/core/testing';

import { InventarioLoteriaFisicaService } from './inventario-loteria-fisica.service';

describe('InventarioLoteriaFisicaService', () => {
  let service: InventarioLoteriaFisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioLoteriaFisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
