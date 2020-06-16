import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationNotesComponent } from './consultation-notes.component';

describe('ConsultationNotesComponent', () => {
  let component: ConsultationNotesComponent;
  let fixture: ComponentFixture<ConsultationNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
