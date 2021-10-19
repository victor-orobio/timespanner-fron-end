import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesGroupComponent } from './list-employees-group.component';

describe('ListEmployeesGroupComponent', () => {
  let component: ListEmployeesGroupComponent;
  let fixture: ComponentFixture<ListEmployeesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
