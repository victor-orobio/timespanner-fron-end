import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeesGroupComponent } from './create-employees-group.component';

describe('CreateEmployeesGroupComponent', () => {
  let component: CreateEmployeesGroupComponent;
  let fixture: ComponentFixture<CreateEmployeesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
