import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  tables = [];
  createTable() {
    if(this.tables.length === 0) {
      this.tables.push(this.tables.length);
    } else {
    }
  }

  constructor(public toggleService: ToggleService) { }

  ngOnInit() {
  }

}
