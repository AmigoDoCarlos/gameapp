import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {
  @Input() team: string[] = [];
  @Input() teamNumber: number = 0;
}
