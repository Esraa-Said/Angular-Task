import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RangeLineComponent } from '../range-line/range-line.component';
import { StationSales } from '../interface/station-sales';
import { faCar, faGasPump  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-station-sales',
  standalone: true,
  imports: [RangeLineComponent, CommonModule, FontAwesomeModule],
  templateUrl: './station-sales.component.html',
  styleUrl: './station-sales.component.css',
})
export class StationSalesComponent {
  faCar = faCar;
  faGasPump = faGasPump;
  stations: StationSales[];
  constructor(){
    this.stations = [
      {name: "Station Name", value: 62721},
      {name: "Station Name", value: 62721},
      {name: "Station Name", value: 0},
    ]
  }

}
