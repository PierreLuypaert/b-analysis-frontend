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
  scoreRed: number = 0;
  scoreBlue: number = 0;
  dangerousBallRed : number = 0;
  dangerousBallBlue : number = 0;
  uniquePointList: any;
  currentCanvas: 'speed' | 'position' | 'possession'  | 'shoots' | 'timeline' = 'speed';
  actionsRed: any = [];
  actionsBlue: any = [];

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) {}

  ngOnInit() {

  
    this.match = this.localStorageService.getMatch();
    let dataBallPosition = this.match.ballPosition;
    let lastDangerousIndex = -10;
    let lastGoalIndex = -10;

    dataBallPosition.forEach((value:any, index:number) => {
      if (value[4]==1) {
        if (dataBallPosition[index][3] === 1 && index - lastDangerousIndex >= 10) {
          this.actionsRed.push(["DANGEROUS", dataBallPosition[index][5]])
          this.dangerousBallRed++;
        } else if (dataBallPosition[index][3] === 2 && index - lastDangerousIndex >= 10) {
          this.actionsBlue.push(["DANGEROUS", dataBallPosition[index][5]])
          this.dangerousBallBlue++;
        }
        lastDangerousIndex = index;
      }
      
      if (value[4]==2) {
        if (dataBallPosition[index][3] === 1 && index - lastGoalIndex >= 10) {
          this.actionsRed.push(["GOAL", dataBallPosition[index][5]])
          this.scoreRed++;
        } else if (dataBallPosition[index][3] === 2 && index - lastGoalIndex >= 10) {
          this.scoreBlue++;
          this.actionsBlue.push(["GOAL", dataBallPosition[index][5]])
        }
        lastGoalIndex = index;
      }
    });
  }

  changeCanvas(canvasType: any): void {
    this.currentCanvas = canvasType;
  }
}
