import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severity-chart',
  templateUrl: './severity-chart.component.html',
  styleUrls: ['./severity-chart.component.css']
})
export class SeverityChartComponent implements OnInit {

  chartData = {
    critical: 5,
    high: 8,
    medium: 12,
    low: 3
  };

  ngOnInit(): void {
    // Normally you would fetch this data from a service
  }
}
