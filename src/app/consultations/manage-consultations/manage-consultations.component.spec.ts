import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConsultationsComponent } from './manage-consultations.component';

describe('ManageConsultationsComponent', () => {
  let component: ManageConsultationsComponent;
  let fixture: ComponentFixture<ManageConsultationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageConsultationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
