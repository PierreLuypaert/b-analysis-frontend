import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-analysis-history',
  templateUrl: './analysis-history.component.html',
  styleUrls: ['./analysis-history.component.scss']
})
export class AnalysisHistoryComponent implements OnInit {
  matches: any[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.fetchMatches();
  }

  fetchMatches() {
    this.matchService.getMatches().subscribe(
      response => {
        this.matches = response;
      },
      error => {
        console.error('Error fetching players', error);
      }
    );
  }

}
