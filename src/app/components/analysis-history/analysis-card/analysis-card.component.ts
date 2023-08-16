import { Component, Input, OnInit } from '@angular/core';
import localeFr from '@angular/common/locales/fr'; // Import French locale data
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

registerLocaleData(localeFr); // Register French locale data
@Component({
  selector: 'app-analysis-card',
  templateUrl: './analysis-card.component.html',
  styleUrls: ['./analysis-card.component.scss']
})
export class AnalysisCardComponent implements OnInit {

  @Input() match: any;

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  openComponent() {
    this.localStorageService.setMatch(this.match);
    this.router.navigate(['history', 'analysis']);
  }
}
