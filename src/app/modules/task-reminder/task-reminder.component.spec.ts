import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReminderComponent } from './task-reminder.component';

describe('TaskReminderComponent', () => {
  let component: TaskReminderComponent;
  let fixture: ComponentFixture<TaskReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
