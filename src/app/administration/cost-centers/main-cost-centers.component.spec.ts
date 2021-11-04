import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCostCentersComponent } from './main-cost-centers.component';

describe('MainCostCentersComponent', () => {
  let component: MainCostCentersComponent;
  let fixture: ComponentFixture<MainCostCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCostCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCostCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
