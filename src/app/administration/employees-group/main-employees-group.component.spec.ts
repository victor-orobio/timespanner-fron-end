import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmployeesGroupComponent } from './main-employees-group.component';

describe('MainEmployeesGroupComponent', () => {
  let component: MainEmployeesGroupComponent;
  let fixture: ComponentFixture<MainEmployeesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEmployeesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEmployeesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
