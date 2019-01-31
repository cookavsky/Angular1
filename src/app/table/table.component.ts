import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';
import { Injectable } from '@angular/core';

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
  containersTableP4L = [];

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

  ngOnInit() {
  }

}
