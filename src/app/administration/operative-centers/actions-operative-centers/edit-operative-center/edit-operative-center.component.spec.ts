import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperativeCenterComponent } from './edit-operative-center.component';

describe('EditOperativeCenterComponent', () => {
  let component: EditOperativeCenterComponent;
  let fixture: ComponentFixture<EditOperativeCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOperativeCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOperativeCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
