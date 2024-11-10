import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-range-line',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './range-line.component.html',
  styleUrl: './range-line.component.css'
})
export class RangeLineComponent implements OnInit {
  @Input() sales: number = 50; 
  rangeValue!: number;

  maxRange = 100000;
    
  ngOnInit(): void {
    this.rangeValue = Math.min(this.sales, this.maxRange) / this.maxRange * 100;
  
  }

 
}
