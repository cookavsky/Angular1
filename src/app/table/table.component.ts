import { Component, OnInit, Injectable } from '@angular/core';

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

  teams = [];

  add (): void {
    this.teams.push(this.teams.length);
  }

  delete (id: number): void {
    let i = this.teams.indexOf(id);

    this.teams.splice(i, 1);
  }

  ngOnInit() {}
}
