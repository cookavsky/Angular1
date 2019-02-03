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
    let elementPP4L = document.getElementById('CurrentTablePP4L');
    let elementPXL = document.getElementById('CurrentTablePXL');
    let elementPPcL = document.getElementById('CurrentTablePPcL');

    if (this.hiddenPP4L === true) {
      if (this.hiddenPXL === false) {
        if (elementPXL.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPXL.children.length === 1) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPXL.children.length === 2) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPXL.children.length === 3) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPXL.children.length === 4) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPXL.children.length === 5) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[4].className === "show") {
            elementPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPXL.children.length === 6) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[4].className === "show") {
            elementPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[5].className === "show") {
            elementPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPXL.children.length === 7) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[4].className === "show") {
            elementPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[5].className === "show") {
            elementPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPXL.children[6].className === "show") {
            elementPXL.children[6].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        }
      } else if (this.hiddenPPcL === false) {
        if (elementPPcL.children.length === 0) {
          this.hiddenPPcL = !this.hiddenPPcL;
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPPcL.children.length === 1) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPPcL.children.length === 2) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPPcL.children.length === 3) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPPcL.children.length === 4) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPPcL.children.length === 5) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[4].className === "show") {
            elementPPcL.children[4].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPPcL.children.length === 6) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[4].className === "show") {
            elementPPcL.children[4].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[5].className === "show") {
            elementPPcL.children[5].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPPcL.children.length === 7) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[4].className === "show") {
            elementPPcL.children[4].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[5].className === "show") {
            elementPPcL.children[5].classList.add("hide");
            this.hiddenPPcL = !this.hiddenPPcL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPPcL.children[6].className === "show") {
            elementPPcL.children[6].classList.add("hide");
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
        if (elementPP4L.children.length === 0) {
          this.hiddenPP4L = !this.hiddenPP4L;
      } else if (elementPP4L.children.length === 1) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (elementPP4L.children.length === 2) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (elementPP4L.children.length === 3) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (elementPP4L.children.length === 4) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (elementPP4L.children.length === 5) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[4].className === "show") {
          elementPP4L.children[4].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (elementPP4L.children.length === 6) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[4].className === "show") {
          elementPP4L.children[4].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[5].className === "show") {
          elementPP4L.children[5].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      } else if (elementPP4L.children.length === 7) {
        if (elementPP4L.children[0].className === "show") {
          elementPP4L.children[0].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[1].className === "show") {
          elementPP4L.children[1].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[2].className === "show") {
          elementPP4L.children[2].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[3].className === "show") {
          elementPP4L.children[3].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[4].className === "show") {
          elementPP4L.children[4].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[5].className === "show") {
          elementPP4L.children[5].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children[6].className === "show") {
          elementPP4L.children[6].classList.add("hide");
          this.hiddenPP4L = !this.hiddenPP4L;
        } else {
          this.hiddenPP4L = !this.hiddenPP4L;
        }
      }
    }
  }

/*----------------------------------------------Xbox-----------------------------------*/

  togglePlatformXL(): void {
    let elementPP4L = document.getElementById('CurrentTablePP4L');
    let elementPXL = document.getElementById('CurrentTablePXL');
    let elementPPcL = document.getElementById('CurrentTablePPcL');

    if (this.hiddenPXL === true) {
      if (this.hiddenPP4L === false) {
        if (elementPP4L.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPP4L = !this.hiddenPP4L;
        } else if (elementPP4L.children.length === 1) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPP4L.children.length === 2) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPP4L.children.length === 3) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPP4L.children.length === 4) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPP4L.children.length === 5) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[4].className === "show") {
            elementPP4L.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPP4L.children.length === 6) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[4].className === "show") {
            elementPP4L.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[5].className === "show") {
            elementPP4L.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        } else if (elementPP4L.children.length === 7) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[4].className === "show") {
            elementPP4L.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[5].className === "show") {
            elementPP4L.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else if (elementPP4L.children[6].className === "show") {
            elementPP4L.children[6].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPP4L = !this.hiddenPP4L;
          }
        }
      } else if (this.hiddenPPcL === false) {
        if (elementPPcL.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children.length === 1) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPPcL.children.length === 2) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPPcL.children.length === 3) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPPcL.children.length === 4) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPPcL.children.length === 5) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[4].className === "show") {
            elementPPcL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPPcL.children.length === 6) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[4].className === "show") {
            elementPPcL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[5].className === "show") {
            elementPPcL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPPcL.children.length === 7) {
          if (elementPPcL.children[0].className === "show") {
            elementPPcL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[1].className === "show") {
            elementPPcL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[2].className === "show") {
            elementPPcL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[3].className === "show") {
            elementPPcL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[4].className === "show") {
            elementPPcL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[5].className === "show") {
            elementPPcL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPPcL.children[6].className === "show") {
            elementPPcL.children[6].classList.add("hide");
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
      if (elementPP4L.children.length === 0) {
        this.hiddenPXL = !this.hiddenPXL;
      } else if (elementPXL.children.length === 1) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (elementPXL.children.length === 2) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (elementPXL.children.length === 3) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (elementPXL.children.length === 4) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (elementPXL.children.length === 5) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[4].className === "show") {
          elementPXL.children[4].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (elementPXL.children.length === 6) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[4].className === "show") {
          elementPXL.children[4].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[5].className === "show") {
          elementPXL.children[5].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      } else if (elementPXL.children.length === 7) {
        if (elementPXL.children[0].className === "show") {
          elementPXL.children[0].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[1].className === "show") {
          elementPXL.children[1].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[2].className === "show") {
          elementPXL.children[2].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[3].className === "show") {
          elementPXL.children[3].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[4].className === "show") {
          elementPXL.children[4].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[5].className === "show") {
          elementPXL.children[5].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else if (elementPXL.children[6].className === "show") {
          elementPXL.children[6].classList.add("hide");
          this.hiddenPXL = !this.hiddenPXL;
        } else {
          this.hiddenPXL = !this.hiddenPXL;
        }
      }
    }
  }

/*--------------------------------------------PC---------------------------------*/

  togglePlatformPcL(): void {
    let elementPP4L = document.getElementById('CurrentTablePP4L');
    let elementPXL = document.getElementById('CurrentTablePXL');
    let elementPPcL = document.getElementById('CurrentTablePPcL');

    if (this.hiddenPPcL === true) {
      if (this.hiddenPXL === false) {
        if (elementPXL.children.length === 0) {
          this.hiddenPXL = !this.hiddenPXL;
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPXL.children.length === 1) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPXL.children.length === 2) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPXL.children.length === 3) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPXL.children.length === 4) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPXL.children.length === 5) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[4].className === "show") {
            elementPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPXL.children.length === 6) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[4].className === "show") {
            elementPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[5].className === "show") {
            elementPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPXL.children.length === 7) {
          if (elementPXL.children[0].className === "show") {
            elementPXL.children[0].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[1].className === "show") {
            elementPXL.children[1].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[2].className === "show") {
            elementPXL.children[2].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[3].className === "show") {
            elementPXL.children[3].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[4].className === "show") {
            elementPXL.children[4].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[5].className === "show") {
            elementPXL.children[5].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPXL.children[6].className === "show") {
            elementPXL.children[6].classList.add("hide");
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPXL = !this.hiddenPXL;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        }
      } else if (this.hiddenPP4L === false) {
        if (elementPP4L.children.length === 0) {
          this.hiddenPP4L = !this.hiddenPP4L;
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPP4L.children.length === 1) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPP4L.children.length === 2) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPP4L.children.length === 3) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPP4L.children.length === 4) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPP4L.children.length === 5) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[4].className === "show") {
            elementPP4L.children[4].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPP4L.children.length === 6) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[4].className === "show") {
            elementPP4L.children[4].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[5].className === "show") {
            elementPP4L.children[5].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else {
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          }
        } else if (elementPP4L.children.length === 7) {
          if (elementPP4L.children[0].className === "show") {
            elementPP4L.children[0].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[1].className === "show") {
            elementPP4L.children[1].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[2].className === "show") {
            elementPP4L.children[2].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[3].className === "show") {
            elementPP4L.children[3].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[4].className === "show") {
            elementPP4L.children[4].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[5].className === "show") {
            elementPP4L.children[5].classList.add("hide");
            this.hiddenPP4L = !this.hiddenPP4L;
            this.hiddenPPcL = !this.hiddenPPcL;
          } else if (elementPP4L.children[6].className === "show") {
            elementPP4L.children[6].classList.add("hide");
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
      if (elementPPcL.children.length === 0) {
        this.hiddenPPcL = !this.hiddenPPcL;
      } else if (elementPPcL.children.length === 1) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (elementPPcL.children.length === 2) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (elementPPcL.children.length === 3) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (elementPPcL.children.length === 4) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (elementPPcL.children.length === 5) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[4].className === "show") {
          elementPPcL.children[4].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (elementPPcL.children.length === 6) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[4].className === "show") {
          elementPPcL.children[4].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[5].className === "show") {
          elementPPcL.children[5].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      } else if (elementPPcL.children.length === 7) {
        if (elementPPcL.children[0].className === "show") {
          elementPPcL.children[0].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[1].className === "show") {
          elementPPcL.children[1].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[2].className === "show") {
          elementPPcL.children[2].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[3].className === "show") {
          elementPPcL.children[3].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[4].className === "show") {
          elementPPcL.children[4].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[5].className === "show") {
          elementPPcL.children[5].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else if (elementPPcL.children[6].className === "show") {
          elementPPcL.children[6].classList.add("hide");
          this.hiddenPPcL = !this.hiddenPPcL;
        } else {
          this.hiddenPPcL = !this.hiddenPPcL;
        }
      }
    }
  }




}

/*
  PP4L = Platform PS4 League
  PXL = Platform Xbox League
  PPcL = Platform Pc League
*/