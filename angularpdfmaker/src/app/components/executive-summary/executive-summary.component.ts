import { Component } from '@angular/core';

@Component({
  selector: 'app-executive-summary',
  templateUrl: './executive-summary.component.html',
  styleUrls: ['./executive-summary.component.css']
})
export class ExecutiveSummaryComponent {

  summaryText: string = `
    This report provides an overview of the security vulnerabilities identified 
    during the latest system scan. It highlights critical issues that require 
    immediate remediation, and provides actionable recommendations for 
    improving system security posture.
  `;
}
