import { TestBed } from '@angular/core/testing';

import { TransaccionesDiaService } from './transacciones-dia.service';

describe('TransaccionesDiaService', () => {
  let service: TransaccionesDiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionesDiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
