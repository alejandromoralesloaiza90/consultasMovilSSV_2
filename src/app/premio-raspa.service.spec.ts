import { TestBed } from '@angular/core/testing';

import { PremioRaspaService } from './premio-raspa.service';

describe('PremioRaspaService', () => {
  let service: PremioRaspaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremioRaspaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
