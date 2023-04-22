import { TestBed } from '@angular/core/testing';

import { FitoterapiaService } from './fitoterapia.service';

describe('FitoterapiaService', () => {
  let service: FitoterapiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitoterapiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
