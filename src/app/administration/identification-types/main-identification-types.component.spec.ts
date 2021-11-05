import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIdentificationTypesComponent } from './main-identification-types.component';

describe('MainIdentificationTypesComponent', () => {
  let component: MainIdentificationTypesComponent;
  let fixture: ComponentFixture<MainIdentificationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIdentificationTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIdentificationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
