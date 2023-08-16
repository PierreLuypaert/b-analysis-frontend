import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-match-chart',
  templateUrl: './match-chart.component.html',
  styleUrls: ['./match-chart.component.scss']
})

export class MatchChartComponent implements OnInit {
  @Input() match: any
  public chartBallSpeed: any;
  public chartBallPosition: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const dataBallSpeed = this.match.ballSpeed;
    const dataBallPosition = this.match.ballPosition;
    this.chartBallSpeed = new Chart("MyChart", {
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

    this.chartBallPosition = new Chart("MyChart2", {
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