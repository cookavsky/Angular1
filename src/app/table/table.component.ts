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

  public hiddenName:boolean = false;
  id = 0;
  team = new Team(0, "", 0, 0, 0, 0, "", 0, "");
  teams = [];

  add (): void {
    this.id += 1;
    const teamADD = new Team(this.id, this.name,this.matches, this.win, this.draw, this.lose, this.goals, this.points, this.form);
    this.teams.push(teamADD);
  }

  delete (id: Team): void {
    this.teams = this.teams.filter(i => i !== id);
  }

  accept(name: string): void {
    this.hiddenName = !this.hiddenName;
    name = name.trim();
    if (!name) {
      return;
    }
  }

  ngOnInit() {}
}
