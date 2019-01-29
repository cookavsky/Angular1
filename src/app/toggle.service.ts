import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  public hiddenLRT: boolean = true;
  public hiddenPL: boolean = true;

  toggleLeagueRT(): void {

    this.hiddenLRT = !this.hiddenLRT;

  }

  togglePlatformL(): void {
    if(this.hiddenLRT === false) {
      this.hiddenLRT = !this.hiddenLRT;
      this.hiddenPL = !this.hiddenPL;
    } else {
      this.hiddenPL = !this.hiddenPL;
    }
  }

  constructor() { }
}
