import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeaderComponent } from './team-header.component';

describe('TeamHeaderComponent', () => {
  let component: TeamHeaderComponent;
  let fixture: ComponentFixture<TeamHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamHeaderComponent],
    });
    fixture = TestBed.createComponent(TeamHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
