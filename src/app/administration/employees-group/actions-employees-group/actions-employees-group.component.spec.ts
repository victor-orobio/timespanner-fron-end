import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsEmployeesGroupComponent } from './actions-employees-group.component';

describe('ActionsEmployeesGroupComponent', () => {
  let component: ActionsEmployeesGroupComponent;
  let fixture: ComponentFixture<ActionsEmployeesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsEmployeesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsEmployeesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
