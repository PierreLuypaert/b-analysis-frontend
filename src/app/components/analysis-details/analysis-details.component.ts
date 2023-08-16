import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.scss']
})
export class AnalysisDetailsComponent implements OnInit {

  match: any;

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.match = this.localStorageService.getMatch();
  }

}
