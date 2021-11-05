import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdentificationTypeComponent } from './edit-identification-type.component';

describe('EditIdentificationTypeComponent', () => {
  let component: EditIdentificationTypeComponent;
  let fixture: ComponentFixture<EditIdentificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIdentificationTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIdentificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
