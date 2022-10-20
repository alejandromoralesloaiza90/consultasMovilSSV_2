import { TestBed } from '@angular/core/testing';

import { ConsultaPremiosService } from './consulta-premios.service';

describe('ConsultaPremiosService', () => {
  let service: ConsultaPremiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaPremiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
