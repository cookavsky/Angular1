import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public hiddenName: boolean = false;
  name: string;
  Nr = 1;
  containers = [];

  constructor(public toggleService: ToggleService) { }

  add(): void {
    this.containers.push(this.containers);
  }

  delete(): void {
    this.containers.pop();
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
