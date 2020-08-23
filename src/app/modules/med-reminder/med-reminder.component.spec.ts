import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedReminderComponent } from './med-reminder.component';

describe('MedReminderComponent', () => {
  let component: MedReminderComponent;
  let fixture: ComponentFixture<MedReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
