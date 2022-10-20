import { TestBed } from '@angular/core/testing';

import { AnuladosDelDIaService } from './anulados-del-dia.service';

describe('AnuladosDelDIaService', () => {
  let service: AnuladosDelDIaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnuladosDelDIaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
