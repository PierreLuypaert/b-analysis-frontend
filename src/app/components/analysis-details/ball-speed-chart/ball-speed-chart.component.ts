import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-ball-speed-chart',
  templateUrl: './ball-speed-chart.component.html',
  styleUrls: ['./ball-speed-chart.component.scss']
})

export class BallSpeedChartComponent implements OnInit {
  @Input() match: any
  public chartBallSpeed: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const dataBallSpeed = this.match.ballPosition;
    const pointColors = dataBallSpeed.map((point: number[]) => {
      const direction = point[3];
      if (direction == 1) {
        return 'red';
      } else {
        return 'blue';
      }
    });

    this.chartBallSpeed = new Chart("chartSpeed", {
      type: 'line',
      data: {
        labels: Array.from(new Set(dataBallSpeed.map((point: number[]) => point[2]))).map(() => ''), // Empty strings for labels
        datasets: [{
          label: 'Ball velocity',
          data: dataBallSpeed.map((point: number[]) => point[2]),
          fill: false,
          pointRadius: 5,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: pointColors, // Assign colors based on point[2] values
          tension: 0.1
        }]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Vitesse en KM/H'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Temps'
            }
          }
        }
      }
    });
  }
}