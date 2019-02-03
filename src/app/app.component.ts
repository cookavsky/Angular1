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

  tablesPP4L = [];
  tablesPXL = [];
  tablesPPcL = [];

  containersPP4L = [];
  containersPXL = [];
  containersPPcL = [];

  addPP4L(): void {
    if (this.containersPP4L.length < 7 && this.tablesPP4L.length < 7) {
      this.tablesPP4L.push(this.tablesPP4L.length);
      this.containersPP4L.push(this.containersPP4L.length);
    }
  }
  addPXL(): void {
    if (this.containersPXL.length < 7 && this.tablesPXL.length < 7) {
      this.tablesPXL.push(this.tablesPXL.length);
      this.containersPXL.push(this.containersPXL.length);
    }
  }
  addPPcL(): void {
    if (this.containersPPcL.length < 7 && this.tablesPPcL.length < 7) {
      this.tablesPPcL.push(this.tablesPPcL.length);
      this.containersPPcL.push(this.containersPPcL.length);
    }
  }

  deletePP4L(): void {
    this.containersPP4L.pop();
    this.tablesPP4L.pop();
  }
  deletePXL(): void {
    this.containersPXL.pop();
    this.tablesPXL.pop();
  }
  deletePPcL(): void {
    this.containersPPcL.pop();
    this.tablesPPcL.pop();
  }

  ShowLeaguePP4L(number): void {
    let elementPP4L = document.getElementById('CurrentTablePP4L');

    if (this.containersPP4L.length === 1) {
      if (elementPP4L.children[0].className === "show") {
        elementPP4L.children[0].classList.add("hide");
      } else {
        elementPP4L.children[0].classList.remove("hide");
      }
    } else if (this.containersPP4L.length === 2) {
      if (number === 0) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
        } else {
          elementPP4L.children[0].classList.remove("hide");
          elementPP4L.children[1].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
        } else {
          elementPP4L.children[1].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 3) {
      if (number === 0) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
        } else {
          elementPP4L.children[0].classList.remove("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
        } else {
          elementPP4L.children[1].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
        } else {
          elementPP4L.children[2].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 4) {
      if (number === 0) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
        } else {
          elementPP4L.children[0].classList.remove("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
        } else {
          elementPP4L.children[1].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
        } else {
          elementPP4L.children[2].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
        } else {
          elementPP4L.children[3].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 5) {
      if (number === 0) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
        } else {
          elementPP4L.children[0].classList.remove("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
        } else {
          elementPP4L.children[1].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
        } else {
          elementPP4L.children[2].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
        } else {
          elementPP4L.children[3].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPP4L.children[4].className === "show") {
          elementPP4L.children[4].classList.add("hide");
        } else {
          elementPP4L.children[4].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 6) {
      if (number === 0) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
        } else {
          elementPP4L.children[0].classList.remove("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
        } else {
          elementPP4L.children[1].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
        } else {
          elementPP4L.children[2].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
        } else {
          elementPP4L.children[3].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPP4L.children[4].className === "show") {
          elementPP4L.children[4].classList.add("hide");
        } else {
          elementPP4L.children[4].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
        }
      } else if (number === 5) {
        if (elementPP4L.children[5].className === "show") {
          elementPP4L.children[5].classList.add("hide");
        } else {
          elementPP4L.children[5].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
        }
      }
    } else if (this.containersPP4L.length === 7) {
      if (number === 0) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
        } else {
          elementPP4L.children[0].classList.remove("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
          elementPP4L.children[6].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
        } else {
          elementPP4L.children[1].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
          elementPP4L.children[6].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
        } else {
          elementPP4L.children[2].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
          elementPP4L.children[6].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
        } else {
          elementPP4L.children[3].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
          elementPP4L.children[6].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPP4L.children[4].className === "show") {
          elementPP4L.children[4].classList.add("hide");
        } else {
          elementPP4L.children[4].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
          elementPP4L.children[6].classList.add("hide");
        }
      } else if (number === 5) {
        if (elementPP4L.children[5].className === "show") {
          elementPP4L.children[5].classList.add("hide");
        } else {
          elementPP4L.children[5].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[6].classList.add("hide");
        }
      } else if (number === 6) {
        if (elementPP4L.children[6].className === "show") {
          elementPP4L.children[6].classList.add("hide");
        } else {
          elementPP4L.children[6].classList.remove("hide");
          elementPP4L.children[0].classList.add("hide");
          elementPP4L.children[1].classList.add("hide");
          elementPP4L.children[2].classList.add("hide");
          elementPP4L.children[3].classList.add("hide");
          elementPP4L.children[4].classList.add("hide");
          elementPP4L.children[5].classList.add("hide");
        }
      }
    }
  }

  ShowLeaguePXL(number): void {
    let elementPXL = document.getElementById('CurrentTablePXL');

    if (this.containersPXL.length === 1) {
      if (elementPXL.children[0].className === "show") {
        elementPXL.children[0].classList.add("hide");
      } else {
        elementPXL.children[0].classList.remove("hide");
      }
    } else if (this.containersPXL.length === 2) {
      if (number === 0) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
        } else {
          elementPXL.children[0].classList.remove("hide");
          elementPXL.children[1].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
        } else {
          elementPXL.children[1].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 3) {
      if (number === 0) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
        } else {
          elementPXL.children[0].classList.remove("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
        } else {
          elementPXL.children[1].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
        } else {
          elementPXL.children[2].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 4) {
      if (number === 0) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
        } else {
          elementPXL.children[0].classList.remove("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
        } else {
          elementPXL.children[1].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
        } else {
          elementPXL.children[2].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
        } else {
          elementPXL.children[3].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 5) {
      if (number === 0) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
        } else {
          elementPXL.children[0].classList.remove("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
        } else {
          elementPXL.children[1].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
        } else {
          elementPXL.children[2].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
        } else {
          elementPXL.children[3].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPXL.children[4].className === "show") {
          elementPXL.children[4].classList.add("hide");
        } else {
          elementPXL.children[4].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 6) {
      if (number === 0) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
        } else {
          elementPXL.children[0].classList.remove("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
        } else {
          elementPXL.children[1].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
        } else {
          elementPXL.children[2].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
        } else {
          elementPXL.children[3].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPXL.children[4].className === "show") {
          elementPXL.children[4].classList.add("hide");
        } else {
          elementPXL.children[4].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
        }
      } else if (number === 5) {
        if (elementPXL.children[5].className === "show") {
          elementPXL.children[5].classList.add("hide");
        } else {
          elementPXL.children[5].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
        }
      }
    } else if (this.containersPXL.length === 7) {
      if (number === 0) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
        } else {
          elementPXL.children[0].classList.remove("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
          elementPXL.children[6].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
        } else {
          elementPXL.children[1].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
          elementPXL.children[6].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
        } else {
          elementPXL.children[2].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
          elementPXL.children[6].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
        } else {
          elementPXL.children[3].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
          elementPXL.children[6].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPXL.children[4].className === "show") {
          elementPXL.children[4].classList.add("hide");
        } else {
          elementPXL.children[4].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
          elementPXL.children[6].classList.add("hide");
        }
      } else if (number === 5) {
        if (elementPXL.children[5].className === "show") {
          elementPXL.children[5].classList.add("hide");
        } else {
          elementPXL.children[5].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[6].classList.add("hide");
        }
      } else if (number === 6) {
        if (elementPXL.children[6].className === "show") {
          elementPXL.children[6].classList.add("hide");
        } else {
          elementPXL.children[6].classList.remove("hide");
          elementPXL.children[0].classList.add("hide");
          elementPXL.children[1].classList.add("hide");
          elementPXL.children[2].classList.add("hide");
          elementPXL.children[3].classList.add("hide");
          elementPXL.children[4].classList.add("hide");
          elementPXL.children[5].classList.add("hide");
        }
      }
    }
  }

  ShowLeaguePPcL(number): void {
    let elementPPcL = document.getElementById('CurrentTablePPcL');

    if (this.containersPPcL.length === 1) {
      if (elementPPcL.children[0].className === "show") {
        elementPPcL.children[0].classList.add("hide");
      } else {
        elementPPcL.children[0].classList.remove("hide");
      }
    } else if (this.containersPPcL.length === 2) {
      if (number === 0) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
        } else {
          elementPPcL.children[0].classList.remove("hide");
          elementPPcL.children[1].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
        } else {
          elementPPcL.children[1].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 3) {
      if (number === 0) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
        } else {
          elementPPcL.children[0].classList.remove("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
        } else {
          elementPPcL.children[1].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
        } else {
          elementPPcL.children[2].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 4) {
      if (number === 0) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
        } else {
          elementPPcL.children[0].classList.remove("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
        } else {
          elementPPcL.children[1].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
        } else {
          elementPPcL.children[2].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
        } else {
          elementPPcL.children[3].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 5) {
      if (number === 0) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
        } else {
          elementPPcL.children[0].classList.remove("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
        } else {
          elementPPcL.children[1].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
        } else {
          elementPPcL.children[2].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
        } else {
          elementPPcL.children[3].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPPcL.children[4].className === "show") {
          elementPPcL.children[4].classList.add("hide");
        } else {
          elementPPcL.children[4].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 6) {
      if (number === 0) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
        } else {
          elementPPcL.children[0].classList.remove("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
        } else {
          elementPPcL.children[1].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
        } else {
          elementPPcL.children[2].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
        } else {
          elementPPcL.children[3].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPPcL.children[4].className === "show") {
          elementPPcL.children[4].classList.add("hide");
        } else {
          elementPPcL.children[4].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
        }
      } else if (number === 5) {
        if (elementPPcL.children[5].className === "show") {
          elementPPcL.children[5].classList.add("hide");
        } else {
          elementPPcL.children[5].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
        }
      }
    } else if (this.containersPPcL.length === 7) {
      if (number === 0) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
        } else {
          elementPPcL.children[0].classList.remove("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
          elementPPcL.children[6].classList.add("hide");
        }
      } else if (number === 1) {
        if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
        } else {
          elementPPcL.children[1].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
          elementPPcL.children[6].classList.add("hide");
        }
      } else if (number === 2) {
        if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
        } else {
          elementPPcL.children[2].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
          elementPPcL.children[6].classList.add("hide");
        }
      } else if (number === 3) {
        if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
        } else {
          elementPPcL.children[3].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
          elementPPcL.children[6].classList.add("hide");
        }
      } else if (number === 4) {
        if (elementPPcL.children[4].className === "show") {
          elementPPcL.children[4].classList.add("hide");
        } else {
          elementPPcL.children[4].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
          elementPPcL.children[6].classList.add("hide");
        }
      } else if (number === 5) {
        if (elementPPcL.children[5].className === "show") {
          elementPPcL.children[5].classList.add("hide");
        } else {
          elementPPcL.children[5].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[6].classList.add("hide");
        }
      } else if (number === 6) {
        if (elementPPcL.children[6].className === "show") {
          elementPPcL.children[6].classList.add("hide");
        } else {
          elementPPcL.children[6].classList.remove("hide");
          elementPPcL.children[0].classList.add("hide");
          elementPPcL.children[1].classList.add("hide");
          elementPPcL.children[2].classList.add("hide");
          elementPPcL.children[3].classList.add("hide");
          elementPPcL.children[4].classList.add("hide");
          elementPPcL.children[5].classList.add("hide");
        }
      }
    }
  }
}
