import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatisticsData } from '../interface/statistics-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  list: StatisticsData[];
  constructor(){
    this.list = [
      {value: "71028", title: "Total Value", percentage: "2%" },
      {value: "20000", title: "Total Sales", percentage: "50" },
      {value: "20000", title: "Avg Sales", percentage: "50" },
      {value: "1567", title: "Total Transaction Count", percentage: "20" },
      
    ]
  }
}
