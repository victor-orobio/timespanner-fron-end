import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCountrieComponent } from './create-countrie.component';

describe('CreateCountrieComponent', () => {
  let component: CreateCountrieComponent;
  let fixture: ComponentFixture<CreateCountrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCountrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCountrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
