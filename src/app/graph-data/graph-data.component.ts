import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph-data',
  standalone: true,
  imports: [],
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.css'],
})
export class GraphDataComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: [
          'Station Name\nDummy 1', 
          'Station Name\nDummy 1', 
          'Station Name\nDummy 1', 
          'Station Name\nDummy 1', 
          'Station Name\nDummy 1'
        ],
        datasets: [
          {
            label: 'Sales',
            data: [250, 100, 200, 250, 100], 
            backgroundColor: '#ff6b4b',
            barThickness: 10, 
            
          },
        ],
      },
      options: {
        responsive: true,
       
        scales: {
          
          x: {
            display: true,
            
          },
          y: {
            beginAtZero: true,
            
            max: 300,
            ticks: {
              stepSize: 100, 
              
            },
          },
        },
        
        plugins: {
          legend: {
            display: false, 
          },
        },
      },
    });
  }
}
