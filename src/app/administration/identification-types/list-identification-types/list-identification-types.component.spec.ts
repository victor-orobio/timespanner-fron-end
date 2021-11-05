import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdentificationTypesComponent } from './list-identification-types.component';

describe('ListIdentificationTypesComponent', () => {
  let component: ListIdentificationTypesComponent;
  let fixture: ComponentFixture<ListIdentificationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIdentificationTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdentificationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
