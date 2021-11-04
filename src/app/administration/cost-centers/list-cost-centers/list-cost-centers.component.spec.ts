import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCostCentersComponent } from './list-cost-centers.component';

describe('ListCostCentersComponent', () => {
  let component: ListCostCentersComponent;
  let fixture: ComponentFixture<ListCostCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCostCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCostCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
