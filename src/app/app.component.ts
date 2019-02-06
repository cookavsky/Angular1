import { Component } from '@angular/core';
import { ToggleService } from './toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tabela Ligowa';

  constructor(public toggleService: ToggleService) { }

  resultsPP4L = [];
  resultsPXL = [];
  resultsPPcL = [];

  tablesPP4L = [];
  tablesPXL = [];
  tablesPPcL = [];

  containersPP4L = [];
  containersPXL = [];
  containersPPcL = [];

  addPP4L(): void {
    if (this.containersPP4L.length < 7 && this.tablesPP4L.length < 7 && this.resultsPP4L.length < 7) {
      this.resultsPP4L.push(this.resultsPP4L.length);
      this.tablesPP4L.push(this.tablesPP4L.length);
      this.containersPP4L.push(this.containersPP4L.length);
    }
  }
  addPXL(): void {
    if (this.containersPXL.length < 7 && this.tablesPXL.length < 7 && this.resultsPXL.length < 7) {
      this.resultsPXL.push(this.resultsPXL.length);
      this.tablesPXL.push(this.tablesPXL.length);
      this.containersPXL.push(this.containersPXL.length);
    }
  }
  addPPcL(): void {
    if (this.containersPPcL.length < 7 && this.tablesPPcL.length < 7 && this.resultsPPcL.length < 7) {
      this.resultsPPcL.push(this.resultsPPcL.length);
      this.tablesPPcL.push(this.tablesPPcL.length);
      this.containersPPcL.push(this.containersPPcL.length);
    }
  }

  deletePP4L(): void {
    this.containersPP4L.pop();
    this.tablesPP4L.pop();
    this.resultsPP4L.pop();
  }
  deletePXL(): void {
    this.containersPXL.pop();
    this.tablesPXL.pop();
    this.resultsPXL.pop();
  }
  deletePPcL(): void {
    this.containersPPcL.pop();
    this.tablesPPcL.pop();
    this.resultsPPcL.pop();
  }

/*----------------Ps4-------*/

  ShowLeaguePP4L(number): void {
    let tablePP4L = document.getElementById('CurrentTablePP4L');
    let resultPP4L = document.getElementById('CurrentResultPP4L');

    if (this.containersPP4L.length === 1) {
      if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
        tablePP4L.children[0].classList.add("hide");
        resultPP4L.children[0].classList.add("hide");
      } else {
        tablePP4L.children[0].classList.remove("hide");
        resultPP4L.children[0].classList.remove("hide");
      }
    } else if (this.containersPP4L.length === 2) {
      if (number === 0) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
        } else {
          tablePP4L.children[0].classList.remove("hide");
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[0].classList.remove("hide");
          resultPP4L.children[1].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
        } else {
          tablePP4L.children[1].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 3) {
      if (number === 0) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
        } else {
          tablePP4L.children[0].classList.remove("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[0].classList.remove("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
        } else {
          tablePP4L.children[1].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[1].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        } else {
          tablePP4L.children[2].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 4) {
      if (number === 0) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
        } else {
          tablePP4L.children[0].classList.remove("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[0].classList.remove("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
        } else {
          tablePP4L.children[1].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[1].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        } else {
          tablePP4L.children[2].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[2].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        } else {
          tablePP4L.children[3].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 5) {
      if (number === 0) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
        } else {
          tablePP4L.children[0].classList.remove("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[0].classList.remove("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
        } else {
          tablePP4L.children[1].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[1].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        } else {
          tablePP4L.children[2].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[2].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        } else {
          tablePP4L.children[3].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[3].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        } else {
          tablePP4L.children[4].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 6) {
      if (number === 0) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
        } else {
          tablePP4L.children[0].classList.remove("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[0].classList.remove("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
        } else {
          tablePP4L.children[1].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[1].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        } else {
          tablePP4L.children[2].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[2].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        } else {
          tablePP4L.children[3].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[3].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        } else {
          tablePP4L.children[4].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[4].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        }
      } else if (number === 5) {
        if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        } else {
          tablePP4L.children[5].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 7) {
      if (number === 0) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
        } else {
          tablePP4L.children[0].classList.remove("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[0].classList.remove("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
        } else {
          tablePP4L.children[1].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[1].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
        } else {
          tablePP4L.children[2].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[2].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
        } else {
          tablePP4L.children[3].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[3].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
        } else {
          tablePP4L.children[4].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[4].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
        }
      } else if (number === 5) {
        if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        } else {
          tablePP4L.children[5].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[5].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
        }
      } else if (number === 6) {
        if (tablePP4L.children[6].className === "show" && resultPP4L.children[6].className === "show") {
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
        } else {
          tablePP4L.children[6].classList.remove("hide");
          tablePP4L.children[0].classList.add("hide");
          tablePP4L.children[1].classList.add("hide");
          tablePP4L.children[2].classList.add("hide");
          tablePP4L.children[3].classList.add("hide");
          tablePP4L.children[4].classList.add("hide");
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[6].classList.remove("hide");
          resultPP4L.children[0].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
        }
      }
    }
  }

/*-----------------Xbox-----------*/

  ShowLeaguePXL(number): void {
    let tablePXL = document.getElementById('CurrentTablePXL');
    let resultPXL = document.getElementById('CurrentResultPXL');

    if (this.containersPXL.length === 1) {
      if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
        tablePXL.children[0].classList.add("hide");
        resultPXL.children[0].classList.add("hide");
      } else {
        tablePXL.children[0].classList.remove("hide");
        resultPXL.children[0].classList.remove("hide");
      }
    } else if (this.containersPXL.length === 2) {
      if (number === 0) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
        } else {
          tablePXL.children[0].classList.remove("hide");
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[0].classList.remove("hide");
          resultPXL.children[1].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
        } else {
          tablePXL.children[1].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 3) {
      if (number === 0) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
        } else {
          tablePXL.children[0].classList.remove("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[0].classList.remove("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
        } else {
          tablePXL.children[1].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[1].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        } else {
          tablePXL.children[2].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 4) {
      if (number === 0) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
        } else {
          tablePXL.children[0].classList.remove("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[0].classList.remove("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
        } else {
          tablePXL.children[1].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[1].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        } else {
          tablePXL.children[2].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[2].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        } else {
          tablePXL.children[3].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 5) {
      if (number === 0) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
        } else {
          tablePXL.children[0].classList.remove("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[0].classList.remove("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
        } else {
          tablePXL.children[1].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[1].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        } else {
          tablePXL.children[2].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[2].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        } else {
          tablePXL.children[3].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[3].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        } else {
          tablePXL.children[4].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 6) {
      if (number === 0) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
        } else {
          tablePXL.children[0].classList.remove("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[0].classList.remove("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
        } else {
          tablePXL.children[1].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[1].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        } else {
          tablePXL.children[2].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[2].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        } else {
          tablePXL.children[3].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[3].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        } else {
          tablePXL.children[4].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[4].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        }
      } else if (number === 5) {
        if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        } else {
          tablePXL.children[5].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 7) {
      if (number === 0) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
        } else {
          tablePXL.children[0].classList.remove("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[0].classList.remove("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
        } else {
          tablePXL.children[1].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[1].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
        } else {
          tablePXL.children[2].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[2].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
        } else {
          tablePXL.children[3].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[3].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
        } else {
          tablePXL.children[4].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[4].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
        }
      } else if (number === 5) {
        if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        } else {
          tablePXL.children[5].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[5].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
        }
      } else if (number === 6) {
        if (tablePXL.children[6].className === "show" && resultPXL.children[6].className === "show") {
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
        } else {
          tablePXL.children[6].classList.remove("hide");
          tablePXL.children[0].classList.add("hide");
          tablePXL.children[1].classList.add("hide");
          tablePXL.children[2].classList.add("hide");
          tablePXL.children[3].classList.add("hide");
          tablePXL.children[4].classList.add("hide");
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[6].classList.remove("hide");
          resultPXL.children[0].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
        }
      }
    }
  }

/*---------------------PC----------------*/

  ShowLeaguePPcL(number): void {
    let tablePPcL = document.getElementById('CurrentTablePPcL');
    let resultPPcL = document.getElementById('CurrentResultPPcL');

    if (this.containersPPcL.length === 1) {
      if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
        tablePPcL.children[0].classList.add("hide");
        resultPPcL.children[0].classList.add("hide");
      } else {
        tablePPcL.children[0].classList.remove("hide");
        resultPPcL.children[0].classList.remove("hide");
      }
    } else if (this.containersPPcL.length === 2) {
      if (number === 0) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
        } else {
          tablePPcL.children[0].classList.remove("hide");
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[0].classList.remove("hide");
          resultPPcL.children[1].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
        } else {
          tablePPcL.children[1].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 3) {
      if (number === 0) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
        } else {
          tablePPcL.children[0].classList.remove("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[0].classList.remove("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
        } else {
          tablePPcL.children[1].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[1].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        } else {
          tablePPcL.children[2].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 4) {
      if (number === 0) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
        } else {
          tablePPcL.children[0].classList.remove("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[0].classList.remove("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
        } else {
          tablePPcL.children[1].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[1].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        } else {
          tablePPcL.children[2].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[2].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        } else {
          tablePPcL.children[3].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 5) {
      if (number === 0) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
        } else {
          tablePPcL.children[0].classList.remove("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[0].classList.remove("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
        } else {
          tablePPcL.children[1].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[1].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        } else {
          tablePPcL.children[2].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[2].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        } else {
          tablePPcL.children[3].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[3].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        } else {
          tablePPcL.children[4].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 6) {
      if (number === 0) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
        } else {
          tablePPcL.children[0].classList.remove("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[0].classList.remove("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
        } else {
          tablePPcL.children[1].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[1].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        } else {
          tablePPcL.children[2].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[2].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        } else {
          tablePPcL.children[3].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[3].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        } else {
          tablePPcL.children[4].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[4].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        }
      } else if (number === 5) {
        if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        } else {
          tablePPcL.children[5].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 7) {
      if (number === 0) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
        } else {
          tablePPcL.children[0].classList.remove("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[0].classList.remove("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
        }
      } else if (number === 1) {
        if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
        } else {
          tablePPcL.children[1].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[1].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
        }
      } else if (number === 2) {
        if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
        } else {
          tablePPcL.children[2].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[2].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
        }
      } else if (number === 3) {
        if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
        } else {
          tablePPcL.children[3].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[3].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
        }
      } else if (number === 4) {
        if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
        } else {
          tablePPcL.children[4].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[4].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
        }
      } else if (number === 5) {
        if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        } else {
          tablePPcL.children[5].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[5].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
        }
      } else if (number === 6) {
        if (tablePPcL.children[6].className === "show" && resultPPcL.children[6].className === "show") {
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
        } else {
          tablePPcL.children[6].classList.remove("hide");
          tablePPcL.children[0].classList.add("hide");
          tablePPcL.children[1].classList.add("hide");
          tablePPcL.children[2].classList.add("hide");
          tablePPcL.children[3].classList.add("hide");
          tablePPcL.children[4].classList.add("hide");
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[6].classList.remove("hide");
          resultPPcL.children[0].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
        }
      }
    }
  }
}
