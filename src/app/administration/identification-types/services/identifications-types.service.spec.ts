import { TestBed } from '@angular/core/testing';

import { IdentificationsTypesService } from './identifications-types.service';

describe('IdentificationsTypesService', () => {
  let service: IdentificationsTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationsTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
