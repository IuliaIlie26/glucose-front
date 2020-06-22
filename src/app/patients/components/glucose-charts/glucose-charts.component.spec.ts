import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseChartsComponent } from './glucose-charts.component';

describe('GlucoseChartsComponent', () => {
  let component: GlucoseChartsComponent;
  let fixture: ComponentFixture<GlucoseChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucoseChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucoseChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
