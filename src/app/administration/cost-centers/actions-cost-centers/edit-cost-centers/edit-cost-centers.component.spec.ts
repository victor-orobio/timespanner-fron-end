import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostCentersComponent } from './edit-cost-centers.component';

describe('EditCostCentersComponent', () => {
  let component: EditCostCentersComponent;
  let fixture: ComponentFixture<EditCostCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCostCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCostCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
