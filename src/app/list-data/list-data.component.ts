import { Component } from '@angular/core';
import { ListData } from '../interface/list-data';
import { CommonModule } from '@angular/common';
import { faCar, faGasPump } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-list-data',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.css',
})
export class ListDataComponent {
  faCar = faCar;
  faGasPump = faGasPump;
  
  list: ListData[];
  constructor() {
    this.list = [
      { sales: 62721, value: 550, compression: "Compression", mTransactionHour: 20, 
        transactionCount: 5161, mTransactionDateTime: "8-1-2021 | 10:16 PM"
      },
      { sales: 62721, value: 550, compression: "Compression", mTransactionHour: 20, 
        transactionCount: 5161, mTransactionDateTime: "8-1-2021 | 10:16 PM"
      },
      { sales: 62721, value: 0, compression: "Compression", mTransactionHour: 20, 
        transactionCount: 5161, mTransactionDateTime: "8-1-2021 | 10:16 PM"
      }
    ];
  }
}
