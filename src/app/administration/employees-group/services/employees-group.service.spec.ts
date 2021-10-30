import { TestBed } from '@angular/core/testing';

import { EmployeesGroupService } from './employees-group.service';

describe('EmployeesGroupService', () => {
  let service: EmployeesGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
