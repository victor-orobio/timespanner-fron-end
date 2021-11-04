import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCostCentersComponent } from './create-cost-centers.component';

describe('CreateCostCentersComponent', () => {
  let component: CreateCostCentersComponent;
  let fixture: ComponentFixture<CreateCostCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCostCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCostCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
