import { Component, OnInit, Injectable } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  public hiddenName: boolean = false;
  name: string;
  Nr = 1;
  teams = [];
  tables = [];

  constructor(public toggleService: ToggleService) { }

  add(): void {
    this.teams.push(this.teams.length);
  }

  delete(): void {
    this.teams.pop();
  }

  accept(): void {
    if (this.hiddenName === false && this.name !== undefined)
    {
      this.hiddenName = !this.hiddenName;
    }
  }

  ngOnInit() {}
}
