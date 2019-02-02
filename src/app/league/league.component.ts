import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';
import { PlatformComponent } from '../platform/platform.component';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  containersPP4L = [];
  containersPXL = [];
  containersPPcL = [];

  constructor(public toggleService: ToggleService,
    public platformComponent: PlatformComponent) { }

  private addPP4L(): void {
    this.containersPP4L.push(this.containersPP4L.length);
  }
  public addPXL(): void {
    this.containersPXL.push(this.containersPXL.length);
  }
  public addPPcL(): void {
    this.containersPPcL.push(this.containersPPcL.length);
  }

  public deletePP4L(): void {
    this.containersPP4L.pop();
  }
  public deletePXL(): void {
    this.containersPXL.pop();
  }
  public deletePPcL(): void {
    this.containersPPcL.pop();
  }

  ngOnInit() {
  }
}
