import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToggleService {
  public hiddenPP4L: boolean = true;
  public hiddenPXL: boolean = true;
  public hiddenPPcL: boolean = true;
  public hiddenLRT: boolean = true;

  togglePlatformP4L() {
    if(this.hiddenLRT === false) {
      this.hiddenLRT = !this.hiddenLRT;
      this.hiddenPP4L = false;
      this.hiddenPXL = true;
      this.hiddenPPcL = true;
    } else {
      this.hiddenPP4L = !this.hiddenPP4L;
      this.hiddenPXL = true;
      this.hiddenPPcL = true;
    }
  }
  togglePlatformXL(): void {
    if(this.hiddenLRT === false) {
      this.hiddenLRT = !this.hiddenLRT;
      this.hiddenPXL = false;
      this.hiddenPP4L = true;
      this.hiddenPPcL = true;
    } else {
      this.hiddenPXL = !this.hiddenPXL;
      this.hiddenPP4L = true;
      this.hiddenPPcL = true;
    }
  }
  togglePlatformPcL(): void {
    if(this.hiddenLRT === false) {
      this.hiddenLRT = !this.hiddenLRT;
      this.hiddenPPcL = false;
      this.hiddenPXL = true;
      this.hiddenPP4L = true;
    } else {
      this.hiddenPPcL = !this.hiddenPPcL;
      this.hiddenPXL = true;
      this.hiddenPP4L = true;
    }
  }
}


/*
  LRT = League Result Table
  PP4L = Platform PS4 League
  PXL = Platform Xbox League
  PPcL = Platform Pc League
*/