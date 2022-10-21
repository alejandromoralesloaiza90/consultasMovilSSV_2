import { TestBed } from '@angular/core/testing';

import { ValidacionesCedulaService } from './validaciones-cedula.service';

describe('ValidacionesCedulaService', () => {
  let service: ValidacionesCedulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacionesCedulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
