import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent {
  inputNumber: number = 0;
  isNumberOfTeams: boolean = true; 
  people: string[] = [];
  teams: string[][] = [];
  msg: string = '';
  msgBackground: string = '';

  showSuccess = (msg: string) => {
    this.msg = msg;
    this.msgBackground = 'green';
  }

  showError = (msg: string) => {
    this.msg = msg;
    this.msgBackground = 'red';
    console.log(this.msg);
  }

  isShowingMsg = () => {
    return this.msg.length > 0;
  }

  clearMsg = () => {
    this.msg = '';
    this.msgBackground = '';
  }

  addPerson = (newName: string) => {
    if(!newName.length) return this.showError('nome do jogador não pode ser vazio');
    this.people.push(newName);
  }

  removePerson = (name: string) => {
    const index = this.people.findIndex(p => p === name);
    if (index < 0) return;
    this.isShowingMsg() && this.clearMsg();
    this.people.splice(index, 1);
  }

  toggleTypeOfNumber = () => {
    this.isNumberOfTeams = !this.isNumberOfTeams;
  }

  setNumber = (newNumber: string) => {
    this.isShowingMsg() && this.clearMsg();
    if(newNumber.length === 0) return;
    const n = Number.parseInt(newNumber);
    if(Number.isNaN(n)) return this.showError('número inválido.');
    this.inputNumber = n;
  }

  private okToSort = () => {
    if(this.inputNumber < 0) return this.showError(
      'Número de times não pode ser negativo.'
    );
    if(!this.inputNumber) return this.showError(
      'Número de times não pode ser zero.'
    );
    if(this.isNumberOfTeams && (this.people.length < this.inputNumber)) return this.showError(
      'Há menos jogadores do que times.'
    );
    if(!this.isNumberOfTeams && (this.people.length % this.inputNumber !== 0)) return this.showError(
      `Não há jogadores suficientes para formar times com ${this.inputNumber} pessoas em cada.`
    );
    return true;
  }

  private pushNameToTeam = (teamNumber: number, teamsSoFar: string[][]) => {
    const spliced = this.people.splice(0, 1);
    if(teamNumber === teamsSoFar.length){
      return teamsSoFar.push(spliced);
    } return teamsSoFar[teamNumber].push(spliced[0]);
  }

  private getNumberOfTeams(){
    return this.isNumberOfTeams
    ? this.inputNumber
    : (this.people.length / this.inputNumber);
  }

  sortTeams = () => {
    if(!this.okToSort()) return;    
    this.showSuccess(this.msgBackground === 'green'
      ? 'Times re-sorteados!'
      : 'Times sorteados!'
    );
    let i = 0;
    const peopleBeforeSorting = [...this.people];
    const teams: string[][] = [];
    const numberOfTeams = this.getNumberOfTeams();
    this.people.sort(() => Math.random() - 0.5); 
    while(this.people.length > 0){
      if(i < numberOfTeams) {
        this.pushNameToTeam(i, teams);
        i++;
        continue;
      }
      i = 0;
    }
    console.log(teams);
    this.teams = teams;
    this.people = peopleBeforeSorting;
  }
}


