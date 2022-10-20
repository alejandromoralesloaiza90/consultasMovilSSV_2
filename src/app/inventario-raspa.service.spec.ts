import { TestBed } from '@angular/core/testing';

import { InventarioRaspaService } from './inventario-raspa.service';

describe('InventarioRaspaService', () => {
  let service: InventarioRaspaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioRaspaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
