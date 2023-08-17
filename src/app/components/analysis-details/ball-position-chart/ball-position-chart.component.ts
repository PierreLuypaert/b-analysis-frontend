import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-ball-position-chart',
  templateUrl: './ball-position-chart.component.html',
  styleUrls: ['./ball-position-chart.component.scss']
})

export class BallPositionChartComponent implements OnInit {
  @Input() match: any
  public chartBallPosition: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const dataBallPosition = this.match.ballPosition;
   
    this.chartBallPosition = new Chart("chartPosition", {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Ball position',
          data: dataBallPosition,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          pointRadius: 5,
          pointBackgroundColor: dataBallPosition.map((point: any[]) => {
            // Assuming 'point' has the structure (x, y, val)
            const val = point[2];
            if (val < 4) {
              return '#00FF00';
            } else if (val>=4 && val < 10) {
              return 'green';
            } else if (val >= 10 && val < 15) {
              return 'orange';
            } else {
              return 'red';
            }
          })
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          },
          y: {
            type: 'linear',
            position: 'left'
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const dataIndex = context.dataIndex;
                if (dataBallPosition[dataIndex]) {
                  const [x, y, extra] = dataBallPosition[dataIndex];
                  return `Vitesse: ${extra} km/h`;
                }
                return ''; // Handle null data point
              }
            }
          }
        }
      }
    });
  }
}