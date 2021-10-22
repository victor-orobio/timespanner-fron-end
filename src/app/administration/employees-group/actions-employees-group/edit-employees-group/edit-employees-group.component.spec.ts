import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeesGroupComponent } from './edit-employees-group.component';

describe('EditEmployeesGroupComponent', () => {
  let component: EditEmployeesGroupComponent;
  let fixture: ComponentFixture<EditEmployeesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
