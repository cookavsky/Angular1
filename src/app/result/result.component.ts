import { Component, OnInit, Injectable } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public toggleService: ToggleService) { }

  ngOnInit() {
  }

}
