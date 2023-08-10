import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css']
})

export class TeamResultsComponent {
  @Input() sortTeams = () => {}; 
  @Input() teams: string[][] = [];
}