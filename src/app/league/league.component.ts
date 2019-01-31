import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  containersPP4L = [];
  containersPXL = [];
  containersPPcL = [];

  constructor(public toggleService: ToggleService, private tableComponent: TableComponent) { }

  addPP4L(): void {
    this.containersPP4L.push(this.containersPP4L.length); this.tableComponent.containersTableP4L.push(this.tableComponent.containersTableP4L.length);
  }
  addPXL(): void {
    this.containersPXL.push(this.containersPXL.length);
  }
  addPPcL(): void {
    this.containersPPcL.push(this.containersPPcL.length);
  }

  deletePP4L(): void {
    this.containersPP4L.pop();
  }
  deletePXL(): void {
    this.containersPXL.pop();
  }
  deletePPcL(): void {
    this.containersPPcL.pop();
  }

  ngOnInit() {
  }
}
