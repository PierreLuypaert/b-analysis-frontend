import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ball-possession-chart',
  templateUrl: './ball-possession-chart.component.html',
  styleUrls: ['./ball-possession-chart.component.scss']
})
export class BallPossessionChartComponent implements OnInit {

  @Input() match: any
  public chartBallPossession: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const dataBallPosition = this.match.ballPosition.map((point: number[]) => point[3]);
    var totalPoints = dataBallPosition.length
    console.log(dataBallPosition.filter((val: number) => val === 1).length)
    console.log(dataBallPosition.filter((val: number) => val === 2).length)
    this.chartBallPossession = new Chart("chartPossession", {
      type: 'bar',
      data: {
        labels: ["REPARTITION"],
        datasets: [
          {
            label: 'ROUGE',
            data: [(dataBallPosition.filter((val: number) => val === 1).length*100/ totalPoints)],
            backgroundColor: 'rgba(255, 0, 0, 1)'
          },
          {
            label: 'BLEU',
            data: [(dataBallPosition.filter((val: number) => val === 2).length*100 / totalPoints)],
            backgroundColor: 'rgba(0, 0, 255, 1)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  }
}
