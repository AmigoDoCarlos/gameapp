import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfTeamsComponent } from './number-of-teams.component';

describe('NumberOfTeamsComponent', () => {
  let component: NumberOfTeamsComponent;
  let fixture: ComponentFixture<NumberOfTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberOfTeamsComponent],
    });
    fixture = TestBed.createComponent(NumberOfTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
