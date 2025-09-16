import { Component, OnInit } from '@angular/core';

interface IssueSummary {
  totalVulnerabilities: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
}

@Component({
  selector: 'app-issue-summary',
  templateUrl: './issue-summary.component.html',
  styleUrls: ['./issue-summary.component.css']
})
export class IssueSummaryComponent implements OnInit {

  summary: IssueSummary = {
    totalVulnerabilities: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0
  };

  ngOnInit(): void {
    // Normally fetched from a service API
    this.summary = {
      totalVulnerabilities: 28,
      critical: 5,
      high: 8,
      medium: 12,
      low: 3
    };
  }
}
