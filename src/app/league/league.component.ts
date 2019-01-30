import { Component, OnInit } from '@angular/core';

import { ToggleService } from '../toggle.service';
import { containerRefreshStart } from '@angular/core/src/render3';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  id = 1;
  containers = [];

  constructor(public toggleService: ToggleService) { }

  add() {
    this.containers.push(this.containers.length);
  }

  delete() {
    this.containers.pop();
  }

  ngOnInit() {
  }

}
