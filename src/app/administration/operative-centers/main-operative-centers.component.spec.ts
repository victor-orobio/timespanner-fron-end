import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOperativeCentersComponent } from './main-operative-centers.component';

describe('MainOperativeCentersComponent', () => {
  let component: MainOperativeCentersComponent;
  let fixture: ComponentFixture<MainOperativeCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOperativeCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOperativeCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
