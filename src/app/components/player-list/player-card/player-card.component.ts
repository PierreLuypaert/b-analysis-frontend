import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr'; // Import French locale data

registerLocaleData(localeFr); // Register French locale data

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: any;
  
  constructor(private datePipe: DatePipe) {  }

  ngOnInit(): void {
  }

}
