import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSnapshotComponent } from './work-snapshot.component';

describe('WorkSnapshotComponent', () => {
  let component: WorkSnapshotComponent;
  let fixture: ComponentFixture<WorkSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
