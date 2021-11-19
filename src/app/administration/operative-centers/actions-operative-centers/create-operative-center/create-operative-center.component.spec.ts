import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperativeCenterComponent } from './create-operative-center.component';

describe('CreateOperativeCenterComponent', () => {
  let component: CreateOperativeCenterComponent;
  let fixture: ComponentFixture<CreateOperativeCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOperativeCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOperativeCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
