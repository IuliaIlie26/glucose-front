import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsAllComponent } from './patients-all.component';

describe('PatientsAllComponent', () => {
  let component: PatientsAllComponent;
  let fixture: ComponentFixture<PatientsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
