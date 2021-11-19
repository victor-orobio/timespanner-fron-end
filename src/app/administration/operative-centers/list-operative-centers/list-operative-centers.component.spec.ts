import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperativeCentersComponent } from './list-operative-centers.component';

describe('ListOperativeCentersComponent', () => {
  let component: ListOperativeCentersComponent;
  let fixture: ComponentFixture<ListOperativeCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOperativeCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOperativeCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
