import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ball-shoots-chart',
  templateUrl: './ball-shoots-chart.component.html',
  styleUrls: ['./ball-shoots-chart.component.scss']
})
export class BallShootsChartComponent implements OnInit {
  @Input() match: any
  @Input() scoreRed: any
  @Input() scoreBlue: any
  @Input() dangerousBallRed: any
  @Input() dangerousBallBlue: any
  public chartShoots: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {  
    this.chartShoots = new Chart("chartShoots", {
      type: 'bar',
      data: {
        labels: ["EQUIPE BLEUE", "EQUIPE ROUGE"],
        datasets: [
          {
            label: "Tir(s) cadré(s)",
            data: [this.dangerousBallBlue, this.dangerousBallRed],
            borderWidth: 2,
            borderRadius: 3,
            borderSkipped: false,
            backgroundColor: ['rgba(255, 165, 0, 0.6)', 'rgba(255, 165, 0, 0.6)'], // Orange color for Shots on target
          },
          {
            label: "But(s) marqué(s)",
            data: [this.scoreBlue, this.scoreRed],
            borderWidth: 2,
            borderRadius: 3,
            borderSkipped: false,
            backgroundColor: ['rgba(173, 216, 230, 0.6)', 'rgba(173, 216, 230, 0.6)'], // Light Blue color for Goals scored
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: 'Equipes'
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Nombre de tir(s)'
            }
          },
        },
      },
    });
  }
  
  

}
