import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-graph-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph-list.component.html',
  styleUrl: './graph-list.component.css',
})
export class GraphListComponent {
  @Input() activeButton: string = 'graph';
  @Output() graphView = new EventEmitter<void>();
  @Output() listView = new EventEmitter<void>();
  handleGraph() {
    this.activeButton = 'graph';
    this.graphView.emit();
  }

  handleList() {
    this.activeButton = 'list';
    this.listView.emit();
  }
}
