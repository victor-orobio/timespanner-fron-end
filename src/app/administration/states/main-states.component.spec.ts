import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatesComponent } from './main-states.component';

describe('MainStatesComponent', () => {
  let component: MainStatesComponent;
  let fixture: ComponentFixture<MainStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
