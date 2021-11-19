import { TestBed } from '@angular/core/testing';

import { OperativeCentersService } from './operative-centers.service';

describe('OperativeCentersService', () => {
  let service: OperativeCentersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperativeCentersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
