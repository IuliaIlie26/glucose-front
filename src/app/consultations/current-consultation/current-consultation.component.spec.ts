import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentConsultationComponent } from './current-consultation.component';

describe('CurrentConsultationComponent', () => {
  let component: CurrentConsultationComponent;
  let fixture: ComponentFixture<CurrentConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
