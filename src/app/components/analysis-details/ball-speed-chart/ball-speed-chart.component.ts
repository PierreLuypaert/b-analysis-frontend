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
    const dataBallSpeed = this.match.ballSpeed;
    this.chartBallSpeed = new Chart("chartSpeed", {
      type: 'line',
      data: {
        labels: dataBallSpeed.map(() => ''), // Empty strings for labels
        datasets: [{
          label: 'Ball velocity',
          data: dataBallSpeed,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        aspectRatio:2.5,
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