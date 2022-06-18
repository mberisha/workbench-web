import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStepsComponent } from './work-steps.component';

describe('WorkStepsComponent', () => {
  let component: WorkStepsComponent;
  let fixture: ComponentFixture<WorkStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
