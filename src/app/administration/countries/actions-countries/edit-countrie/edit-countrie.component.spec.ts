import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountrieComponent } from './edit-countrie.component';

describe('EditCountrieComponent', () => {
  let component: EditCountrieComponent;
  let fixture: ComponentFixture<EditCountrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCountrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
