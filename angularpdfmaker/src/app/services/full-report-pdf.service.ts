import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class FullReportPdfService {

  generateFullReport() {
    const documentDefinition = {
      content: [
        { text: 'Vulnerability Assessment Report', style: 'header' },
        { text: 'Company Name: Your Company', style: 'subheader' },
        { text: `Date: ${new Date().toLocaleDateString()}`, margin: [0, 0, 0, 20] },

        { text: 'Table of Contents', style: 'subheader' },
        { ul: [
            '1. Executive Summary',
            '2. Issue Summary',
            '3. Vulnerability List',
            '4. Severity Chart',
            '5. Critical Vulnerabilities',
            '6. Accepted Vulnerabilities',
            '7. Conclusion'
          ], margin: [0, 0, 0, 20] 
        },

        { text: 'Executive Summary', style: 'subheader' },
        { text: 'This report provides an overview of the security vulnerabilities identified during the latest system scan. It highlights critical issues that require immediate remediation and provides actionable recommendations.' },

        { text: 'Issue Summary', style: 'subheader' },
        {
          ul: [
            'Total Vulnerabilities: 28',
            'Critical: 5',
            'High: 8',
            'Medium: 12',
            'Low: 3'
          ], margin: [0, 0, 0, 20]
        },

        { text: 'Vulnerability List', style: 'subheader' },
        {
          table: {
            widths: ['auto', '*', 'auto', '*'],
            body: [
              ['ID', 'Title', 'Severity', 'Description'],
              ['VULN-001', 'SQL Injection', 'Critical', 'SQL Injection in login form'],
              ['VULN-002', 'XSS Vulnerability', 'High', 'XSS in comments section'],
              ['VULN-003', 'Open Redirect', 'Medium', 'Open redirect in reset link']
            ]
          }, margin: [0, 0, 0, 20]
        },

        { text: 'Severity Chart', style: 'subheader' },
        { text: 'Critical: 5, High: 8, Medium: 12, Low: 3', margin: [0, 0, 0, 20] },

        { text: 'Critical Vulnerabilities', style: 'subheader' },
        { text: 'VULN-001: SQL Injection in Login Form\nDescription: Input not sanitized allowing SQL injection.\nRecommendation: Use parameterized queries.' },
        { text: 'VULN-005: Remote Code Execution\nDescription: Allows remote command execution.\nRecommendation: Apply patches and validate inputs.', margin: [0, 0, 0, 20] },

        { text: 'Accepted Vulnerabilities', style: 'subheader' },
        { text: 'VULN-010: Information Disclosure\nDescription: Debug info exposed.\nJustification: Reviewed and accepted due to business constraints.', margin: [0, 0, 0, 20] },

        { text: 'Conclusion', style: 'subheader' },
        { text: 'This concludes the vulnerability assessment report. All identified vulnerabilities should be remediated according to the provided recommendations.' }
      ],
      styles: {
        header: { fontSize: 22, bold: true, margin: [0, 0, 0, 20] },
        subheader: { fontSize: 18, bold: true, margin: [0, 15, 0, 10] }
      }
    };

    pdfMake.createPdf(documentDefinition).download('full-vulnerability-report.pdf');
  }
}
