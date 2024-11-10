import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
import { StatisticsComponent } from "../statistics/statistics.component";
import { GraphListComponent } from "../graph-list/graph-list.component";
import { GraphDataComponent } from "../graph-data/graph-data.component";
import { RouterOutlet } from '@angular/router';
import { RadarchartComponent } from "../radarchart/radarchart.component";
import { StationSalesComponent } from "../station-sales/station-sales.component";
import { CommonModule } from '@angular/common';
import { ListDataComponent } from "../list-data/list-data.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, StatisticsComponent, GraphListComponent, GraphDataComponent, RouterOutlet, RadarchartComponent, StationSalesComponent, ListDataComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activeButton: string = 'graph';
  showGraph() {
    this.activeButton = 'graph';
  }
  showList() {
    this.activeButton = 'list';
  }
}
