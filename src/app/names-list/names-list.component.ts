import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css']
})
export class NamesListComponent {
  @Input() people: string[] = []; 
  @Input() removePerson = (person: string) => {};
}
