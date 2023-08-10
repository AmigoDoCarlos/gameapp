import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.css']
})

export class TeamSettingsComponent {
  @Input() number: number = 0;
  @Input() people: string[] = [];  
  @Input() isNumberOfTeams: boolean = false;
  @Input() setNumber = (newNumber: string) => {};
  @Input() addPerson = (newPerson: string) => {};
  @Input() removePerson = (person: string) => {};
  @Input() clearMsg = () => {};
  @Input() toggleTypeOfNumber = () => {};

  name: string = '';

  setName = (newName: string) => {
    this.name = newName;
    this.clearMsg();
  }

  clearName = () => {
    this.name = '';
  }

  addName = () => {
    this.addPerson(this.name);
    this.clearName();
  }
}
