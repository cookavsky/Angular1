import { Component, OnInit, Injectable } from '@angular/core';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  constructor() { }

  id = 0;
  team = new Team(0, "", 0, 0, 0, 0, "", 0, "");
  teams = [];
  index = [];

  add(): void {
    this.id += 1;

    const teamADD = new Team(this.id, this.team.name, this.team.matches, this.team.win, this.team.draw, this.team.lose, this.team.goals, this.team.points, this.team.form);

    this.index.push(this.index.length + 1);
    this.teams.push(teamADD);
  }

  delete(id: Team): void {
    this.teams = this.teams.filter(i => i !== id);
    this.index.pop();
  }

  accept($event, name: string): void {
    if(name !== "") {
      if ($event.target.className === 'NameBtnAccept') {
        $event.target.classList.remove('NameBtnAccept');
        $event.path[1].children[0].children[0].classList.remove('hide');
        $event.path[1].children[0].children[1].classList.remove('show');
        $event.target.classList.add('NameBtnEdit');
        $event.path[1].children[0].children[0].classList.add('show');
        $event.path[1].children[0].children[1].classList.add('hide');
      } else if ($event.target.className === 'NameBtnEdit') {
        $event.target.classList.remove('NameBtnEdit');
        $event.path[1].children[0].children[0].classList.remove('show');
        $event.path[1].children[0].children[1].classList.remove('hide');
        $event.target.classList.add('NameBtnAccept');
        $event.path[1].children[0].children[0].classList.add('hide');
        $event.path[1].children[0].children[1].classList.add('show');
      }
    } else {
      alert("Name is empty");
    }
  }

  ngOnInit() {}
}
