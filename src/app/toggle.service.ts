import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToggleService {
  public hiddenPP4L: boolean = true;
  public hiddenPXL: boolean = true;
  public hiddenPPcL: boolean = true;

/*---------------------------------------PS4---------------------------------------------------*/

  togglePlatformP4L() {
    let tablePP4L = document.getElementById('CurrentTablePP4L');
    let tablePXL = document.getElementById('CurrentTablePXL');
    let tablePPcL = document.getElementById('CurrentTablePPcL');
    let resultPP4L = document.getElementById('CurrentResultPP4L');
    let resultPXL = document.getElementById('CurrentResultPXL');
    let resultPPcL = document.getElementById('CurrentResultPPcL');

    if (this.hiddenPP4L === true) {
      if (this.hiddenPXL === false) {
        if (tablePXL.children.length === 0 && resultPXL.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePXL.children.length === 1 && resultPXL.children.length === 1) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePXL.children.length === 2 && resultPXL.children.length === 2) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePXL.children.length === 3 && resultPXL.children.length === 3) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePXL.children.length === 4 && resultPXL.children.length === 4) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePXL.children.length === 5 && resultPXL.children.length === 5) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
            tablePXL.children[4].classList.add("hide");
            resultPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePXL.children.length === 6 && resultPXL.children.length === 6) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
            tablePXL.children[4].classList.add("hide");
            resultPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
            tablePXL.children[5].classList.add("hide");
            resultPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePXL.children.length === 7 && resultPXL.children.length === 7) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
            tablePXL.children[4].classList.add("hide");
            resultPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
            tablePXL.children[5].classList.add("hide");
            resultPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePXL.children[6].className === "show" && resultPXL.children[6].className === "show") {
            tablePXL.children[6].classList.add("hide");
            resultPXL.children[6].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        }
      } else if (this.hiddenPPcL === false) {
        if (tablePPcL.children.length === 0 && resultPPcL.children.length === 0) {
          this.hiddenPPcL = !this.hiddenPPcL;
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePPcL.children.length === 1 && resultPPcL.children.length === 1) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePPcL.children.length === 2 && resultPPcL.children.length === 2) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePPcL.children.length === 3 && resultPPcL.children.length === 3) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePPcL.children.length === 4 && resultPPcL.children.length === 4) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePPcL.children.length === 5 && resultPPcL.children.length === 5) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
            tablePPcL.children[4].classList.add("hide");
            resultPPcL.children[4].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePPcL.children.length === 6 && resultPPcL.children.length === 6) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
            tablePPcL.children[4].classList.add("hide");
            resultPPcL.children[4].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
            tablePPcL.children[5].classList.add("hide");
            resultPPcL.children[5].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePPcL.children.length === 7 && resultPPcL.children.length === 7) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
            tablePPcL.children[4].classList.add("hide");
            resultPPcL.children[4].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
            tablePPcL.children[5].classList.add("hide");
            resultPPcL.children[5].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePPcL.children[6].className === "show" && resultPPcL.children[6].className === "show") {
            tablePPcL.children[6].classList.add("hide");
            resultPPcL.children[6].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        }
      } else {
        this.hiddenPP4L = !this.hiddenPP4L;
        this.hiddenPXL = true;
        this.hiddenPPcL = true;
      }
    } else if (this.hiddenPP4L === false) {
      if (tablePP4L.children.length === 0 && resultPP4L.children.length === 0) {
          this.hiddenPP4L = !this.hiddenPP4L;
      } else if (tablePP4L.children.length === 1 && resultPP4L.children.length === 1) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (tablePP4L.children.length === 2 && resultPP4L.children.length === 2) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (tablePP4L.children.length === 3 && resultPP4L.children.length === 3) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (tablePP4L.children.length === 4 && resultPP4L.children.length === 4) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (tablePP4L.children.length === 5 && resultPP4L.children.length === 5) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (tablePP4L.children.length === 6 && resultPP4L.children.length === 6) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (tablePP4L.children.length === 7 && resultPP4L.children.length === 7) {
        if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
          tablePP4L.children[0].classList.add("hide");
          resultPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
          tablePP4L.children[1].classList.add("hide");
          resultPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
          tablePP4L.children[2].classList.add("hide");
          resultPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
          tablePP4L.children[3].classList.add("hide");
          resultPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
          tablePP4L.children[4].classList.add("hide");
          resultPP4L.children[4].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
          tablePP4L.children[5].classList.add("hide");
          resultPP4L.children[5].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children[6].className === "show" && resultPP4L.children[6].className === "show") {
          tablePP4L.children[6].classList.add("hide");
          resultPP4L.children[6].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      }
    }
  }

/*----------------------------------------------Xbox-----------------------------------*/

  togglePlatformXL(): void {
    let tablePP4L = document.getElementById('CurrentTablePP4L');
    let tablePXL = document.getElementById('CurrentTablePXL');
    let tablePPcL = document.getElementById('CurrentTablePPcL');
    let resultPP4L = document.getElementById('CurrentResultPP4L');
    let resultPXL = document.getElementById('CurrentResultPXL');
    let resultPPcL = document.getElementById('CurrentResultPPcL');

    if (this.hiddenPXL === true) {
      if (this.hiddenPP4L === false) {
        if (tablePP4L.children.length === 0 && resultPP4L.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (tablePP4L.children.length === 1 && resultPP4L.children.length === 1) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePP4L.children.length === 2 && resultPP4L.children.length === 2) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePP4L.children.length === 3 && resultPP4L.children.length === 3) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePP4L.children.length === 4 && resultPP4L.children.length === 4) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePP4L.children.length === 5 && resultPP4L.children.length === 5) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
            tablePP4L.children[4].classList.add("hide");
            resultPP4L.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePP4L.children.length === 6 && resultPP4L.children.length === 6) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
            tablePP4L.children[4].classList.add("hide");
            resultPP4L.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
            tablePP4L.children[5].classList.add("hide");
            resultPP4L.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (tablePP4L.children.length === 7 && resultPP4L.children.length === 7) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
            tablePP4L.children[4].classList.add("hide");
            resultPP4L.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
            tablePP4L.children[5].classList.add("hide");
            resultPP4L.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (tablePP4L.children[6].className === "show" && resultPP4L.children[6].className === "show") {
            tablePP4L.children[6].classList.add("hide");
            resultPP4L.children[6].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        }
      } else if (this.hiddenPPcL === false) {
        if (tablePPcL.children.length === 0 && resultPPcL.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children.length === 1 && resultPPcL.children.length === 1) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePPcL.children.length === 2 && resultPPcL.children.length === 2) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePPcL.children.length === 3 && resultPPcL.children.length === 3) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePPcL.children.length === 4 && resultPPcL.children.length === 4) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePPcL.children.length === 5 && resultPPcL.children.length === 5) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
            tablePPcL.children[4].classList.add("hide");
            resultPPcL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePPcL.children.length === 6 && resultPPcL.children.length === 6) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
            tablePPcL.children[4].classList.add("hide");
            resultPPcL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
            tablePPcL.children[5].classList.add("hide");
            resultPPcL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePPcL.children.length === 7 && resultPPcL.children.length === 7) {
          if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
            tablePPcL.children[0].classList.add("hide");
            resultPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
            tablePPcL.children[1].classList.add("hide");
            resultPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
            tablePPcL.children[2].classList.add("hide");
            resultPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
            tablePPcL.children[3].classList.add("hide");
            resultPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
            tablePPcL.children[4].classList.add("hide");
            resultPPcL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
            tablePPcL.children[5].classList.add("hide");
            resultPPcL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePPcL.children[6].className === "show" && resultPPcL.children[6].className === "show") {
            tablePPcL.children[6].classList.add("hide");
            resultPPcL.children[6].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        }
      } else {
        this.hiddenPXL = !this.hiddenPXL;
        this.hiddenPP4L = true;
        this.hiddenPPcL = true;
      }
    } else if (this.hiddenPXL === false) {
      if (tablePXL.children.length === 0 && resultPXL.children.length === 0) {
        this.hiddenPXL = !this.hiddenPXL;
      } else if (tablePXL.children.length === 1 && resultPXL.children.length === 1) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (tablePXL.children.length === 2 && resultPXL.children.length === 2) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (tablePXL.children.length === 3 && resultPXL.children.length === 3) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (tablePXL.children.length === 4 && resultPXL.children.length === 4) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (tablePXL.children.length === 5 && resultPXL.children.length === 5) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (tablePXL.children.length === 6 && resultPXL.children.length === 6) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (tablePXL.children.length === 7 && resultPXL.children.length === 7) {
        if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
          tablePXL.children[0].classList.add("hide");
          resultPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
          tablePXL.children[1].classList.add("hide");
          resultPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
          tablePXL.children[2].classList.add("hide");
          resultPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
          tablePXL.children[3].classList.add("hide");
          resultPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
          tablePXL.children[4].classList.add("hide");
          resultPXL.children[4].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
          tablePXL.children[5].classList.add("hide");
          resultPXL.children[5].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (tablePXL.children[6].className === "show" && resultPXL.children[6].className === "show") {
          tablePXL.children[6].classList.add("hide");
          resultPXL.children[6].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      }
    }
  }

/*--------------------------------------------PC---------------------------------*/

  togglePlatformPcL(): void {
    let tablePP4L = document.getElementById('CurrentTablePP4L');
    let tablePXL = document.getElementById('CurrentTablePXL');
    let tablePPcL = document.getElementById('CurrentTablePPcL');
    let resultPP4L = document.getElementById('CurrentResultPP4L');
    let resultPXL = document.getElementById('CurrentResultPXL');
    let resultPPcL = document.getElementById('CurrentResultPPcL');

    if (this.hiddenPPcL === true) {
      if (this.hiddenPXL === false) {
        if (tablePXL.children.length === 0 && resultPXL.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePXL.children.length === 1 && resultPXL.children.length === 1) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePXL.children.length === 2 && resultPXL.children.length === 2) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePXL.children.length === 3 && resultPXL.children.length === 3) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePXL.children.length === 4 && resultPXL.children.length === 4) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePXL.children.length === 5 && resultPXL.children.length === 5) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
            tablePXL.children[4].classList.add("hide");
            resultPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePXL.children.length === 6 && resultPXL.children.length === 6) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
            tablePXL.children[4].classList.add("hide");
            resultPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
            tablePXL.children[5].classList.add("hide");
            resultPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePXL.children.length === 7 && resultPXL.children.length === 7) {
          if (tablePXL.children[0].className === "show" && resultPXL.children[0].className === "show") {
            tablePXL.children[0].classList.add("hide");
            resultPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[1].className === "show" && resultPXL.children[1].className === "show") {
            tablePXL.children[1].classList.add("hide");
            resultPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[2].className === "show" && resultPXL.children[2].className === "show") {
            tablePXL.children[2].classList.add("hide");
            resultPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[3].className === "show" && resultPXL.children[3].className === "show") {
            tablePXL.children[3].classList.add("hide");
            resultPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[4].className === "show" && resultPXL.children[4].className === "show") {
            tablePXL.children[4].classList.add("hide");
            resultPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[5].className === "show" && resultPXL.children[5].className === "show") {
            tablePXL.children[5].classList.add("hide");
            resultPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePXL.children[6].className === "show" && resultPXL.children[6].className === "show") {
            tablePXL.children[6].classList.add("hide");
            resultPXL.children[6].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        }
      } else if (this.hiddenPP4L === false) {
        if (tablePP4L.children.length === 0 && resultPP4L.children.length === 0) {
          this.hiddenPP4L = !this.hiddenPP4L;
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePP4L.children.length === 1 && resultPP4L.children.length === 1) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePP4L.children.length === 2 && resultPP4L.children.length === 2) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePP4L.children.length === 3 && resultPP4L.children.length === 3) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePP4L.children.length === 4 && resultPP4L.children.length === 4) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePP4L.children.length === 5 && resultPP4L.children.length === 5) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
            tablePP4L.children[4].classList.add("hide");
            resultPP4L.children[4].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePP4L.children.length === 6 && resultPP4L.children.length === 6) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
            tablePP4L.children[4].classList.add("hide");
            resultPP4L.children[4].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
            tablePP4L.children[5].classList.add("hide");
            resultPP4L.children[5].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (tablePP4L.children.length === 7 && resultPP4L.children.length === 7) {
          if (tablePP4L.children[0].className === "show" && resultPP4L.children[0].className === "show") {
            tablePP4L.children[0].classList.add("hide");
            resultPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[1].className === "show" && resultPP4L.children[1].className === "show") {
            tablePP4L.children[1].classList.add("hide");
            resultPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[2].className === "show" && resultPP4L.children[2].className === "show") {
            tablePP4L.children[2].classList.add("hide");
            resultPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[3].className === "show" && resultPP4L.children[3].className === "show") {
            tablePP4L.children[3].classList.add("hide");
            resultPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[4].className === "show" && resultPP4L.children[4].className === "show") {
            tablePP4L.children[4].classList.add("hide");
            resultPP4L.children[4].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[5].className === "show" && resultPP4L.children[5].className === "show") {
            tablePP4L.children[5].classList.add("hide");
            resultPP4L.children[5].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (tablePP4L.children[6].className === "show" && resultPP4L.children[6].className === "show") {
            tablePP4L.children[6].classList.add("hide");
            resultPP4L.children[6].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        }
      } else {
        this.hiddenPPcL = !this.hiddenPPcL;
        this.hiddenPP4L = true;
        this.hiddenPXL = true;
      }
    } else if (this.hiddenPPcL === false) {
      if (tablePPcL.children.length === 0 && resultPPcL.children.length === 0) {
        this.hiddenPPcL = !this.hiddenPPcL;
      } else if (tablePPcL.children.length === 1 && resultPPcL.children.length === 1) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (tablePPcL.children.length === 2 && resultPPcL.children.length === 2) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (tablePPcL.children.length === 3 && resultPPcL.children.length === 3) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (tablePPcL.children.length === 4 && resultPPcL.children.length === 4) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (tablePPcL.children.length === 5 && resultPPcL.children.length === 5) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (tablePPcL.children.length === 6 && resultPPcL.children.length === 6) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (tablePPcL.children.length === 7 && resultPPcL.children.length === 7) {
        if (tablePPcL.children[0].className === "show" && resultPPcL.children[0].className === "show") {
          tablePPcL.children[0].classList.add("hide");
          resultPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[1].className === "show" && resultPPcL.children[1].className === "show") {
          tablePPcL.children[1].classList.add("hide");
          resultPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[2].className === "show" && resultPPcL.children[2].className === "show") {
          tablePPcL.children[2].classList.add("hide");
          resultPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[3].className === "show" && resultPPcL.children[3].className === "show") {
          tablePPcL.children[3].classList.add("hide");
          resultPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[4].className === "show" && resultPPcL.children[4].className === "show") {
          tablePPcL.children[4].classList.add("hide");
          resultPPcL.children[4].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[5].className === "show" && resultPPcL.children[5].className === "show") {
          tablePPcL.children[5].classList.add("hide");
          resultPPcL.children[5].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (tablePPcL.children[6].className === "show" && resultPPcL.children[6].className === "show") {
          tablePPcL.children[6].classList.add("hide");
          resultPPcL.children[6].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      }
    }
  }
}