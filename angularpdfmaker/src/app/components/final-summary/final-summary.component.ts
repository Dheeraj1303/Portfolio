import { Component } from '@angular/core';

@Component({
  selector: 'app-final-summary',
  templateUrl: './final-summary.component.html',
  styleUrls: ['./final-summary.component.css']
})
export class FinalSummaryComponent {

  conclusionText: string = `
    This concludes the vulnerability assessment report. All identified vulnerabilities 
    should be remediated according to the recommendations provided. 
    For further assistance, please contact the security team.
  `;
}
