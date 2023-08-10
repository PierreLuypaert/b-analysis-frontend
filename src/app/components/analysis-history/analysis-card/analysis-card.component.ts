import { Component, Input, OnInit } from '@angular/core';
import localeFr from '@angular/common/locales/fr'; // Import French locale data
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr); // Register French locale data
@Component({
  selector: 'app-analysis-card',
  templateUrl: './analysis-card.component.html',
  styleUrls: ['./analysis-card.component.scss']
})
export class AnalysisCardComponent implements OnInit {

  @Input() match: any;

  constructor() { }

  ngOnInit(): void {
  }

}
