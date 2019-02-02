import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tabela Ligowa';
  createTable() {
    this.tableComponent.tables.push(this.tableComponent.tables.length);
    console.log("SS");
  }
  constructor(public tableComponent: TableComponent) { }
}
