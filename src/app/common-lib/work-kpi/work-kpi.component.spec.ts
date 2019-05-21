import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkKpiComponent } from './work-kpi.component';

describe('WorkKpiComponent', () => {
  let component: WorkKpiComponent;
  let fixture: ComponentFixture<WorkKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
