import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-match-chart',
  templateUrl: './match-chart.component.html',
  styleUrls: ['./match-chart.component.scss']
})
export class MatchChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ["1","1","1","1","1","1","1"],
        datasets: [{
          label: 'Ball velocity',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}