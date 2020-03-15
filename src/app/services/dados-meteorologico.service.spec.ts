import { TestBed } from '@angular/core/testing';

import { DadosMeteorologicoService } from './dados-meteorologico.service';

describe('DadosMeteorologicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosMeteorologicoService = TestBed.get(DadosMeteorologicoService);
    expect(service).toBeTruthy();
  });
});
