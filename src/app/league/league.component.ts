import { Component, OnInit } from '@angular/core';

import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  constructor(public toggleService: ToggleService) { }

  ngOnInit() {
  }

}
