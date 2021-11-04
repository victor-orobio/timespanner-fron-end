import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilesComponent } from './main-profiles.component';

describe('MainProfilesComponent', () => {
  let component: MainProfilesComponent;
  let fixture: ComponentFixture<MainProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
