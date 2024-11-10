import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-radarchart',
  standalone: true,
  imports: [],
  templateUrl: './radarchart.component.html',
  styleUrl: './radarchart.component.css'
})
export class RadarchartComponent implements AfterViewInit {
  @ViewChild('radarCanvas') radarCanvas!: ElementRef;

  radarChart: any;

  ngAfterViewInit(): void {
    this.radarChart = new Chart(this.radarCanvas.nativeElement, {
      type: 'radar',
      data: {
        labels: [
          '24:00', '02:00', '04:00', '06:00', '08:00', 
          '10:00', '12:00', '14:00', '16:00', '18:00', 
          '20:00', '22:00'
        ],
        datasets: [
          {
            label: 'Dataset 1',
            data: [45, 49, 60, 40, 30, 40, 45, 40, 32, 40, 60, 49],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            pointRadius: 0, // Hide data points
          },
          {
            label: 'Dataset 2',
            data: [45, 65, 40, 30, 45, 48, 50, 55, 70, 35, 30, 35],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            pointRadius: 0, // Hide data points
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            angleLines: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              display: false, // Hide the radial axis numbers
            },
          }
        },
        plugins: {
          legend: {
            display: false, // Hide the dataset labels
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
        },
        elements: {
          line: {
            tension: 0.3 // Smooth out the line
          }
        }
      },
    });
  }
}