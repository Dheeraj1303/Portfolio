import { Component } from '@angular/core';
import { FullReportPdfService } from '../../services/full-report-pdf.service';
@Component({
  selector: 'app-report-generator',
  template: `<button (click)="generateReport()">Download Full Vulnerability Report</button>`,
})
export class ReportGeneratorComponent {

  constructor(private pdfService: FullReportPdfService) { }

  generateReport() {
    this.pdfService.generateFullReport();
  }
}
