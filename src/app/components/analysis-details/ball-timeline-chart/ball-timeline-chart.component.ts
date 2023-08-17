import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ball-timeline-chart',
  templateUrl: './ball-timeline-chart.component.html',
  styleUrls: ['./ball-timeline-chart.component.scss']
})
export class BallTimelineChartComponent implements OnInit {

  @Input() match: any
  @Input() actionsRed: any
  @Input() actionsBlue: any
  public chartTimeline: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const interval = 60; // Interval for labeling in seconds
    let numIntervals = 0;
  
    // Find the maximum interval from the data
    for (const entry of this.actionsBlue) {
      if (entry[1] > numIntervals) {
        numIntervals = entry[1];
      }
    }
  
    const labels = Array.from({ length: numIntervals }, (_, index) => {
      const minutes = Math.floor((index * interval) / 60);
      const seconds = (index * interval) % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });
  
    // Prepare datasets for events
    const datasets = [];
  
    for (const entry of this.actionsBlue.concat(this.actionsRed)) {
      const eventType = (entry[0] == 'GOAL' ? 'But(s) marqué(s)' : 'Tir(s) cadré(s)');
      const eventInterval = entry[1] - 1; // Adjust to 0-based index
  
      if (eventInterval >= 0 && eventInterval < numIntervals) {
        const datasetIndex = datasets.findIndex(dataset => dataset.label === eventType);
  
        if (datasetIndex !== -1) {
          // Dataset for this event type already exists
          datasets[datasetIndex].data[eventInterval] += 1;
        } else {
          // Dataset for this event type doesn't exist, create it
          const dataset = {
            label: eventType,
            data: Array(numIntervals).fill(0),
            backgroundColor: entry[0] === 'GOAL' ? 'green' : 'orange', // Customize color
          };
          dataset.data[eventInterval] = 1;
          datasets.push(dataset);
        }
      }
    }
  
    this.chartTimeline = new Chart("chartTimeline", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets,
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
              text: 'Temps'
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