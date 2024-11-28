import { TestBed } from '@angular/core/testing';
import { LunetteService } from './lunette.service';

describe('TvService', () => {  // Corrected name from 'SupplementService' to 'TvService'
  let service: LunetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
