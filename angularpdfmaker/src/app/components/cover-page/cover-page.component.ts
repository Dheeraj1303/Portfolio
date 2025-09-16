import { Component } from '@angular/core';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent {
  reportTitle: string = 'Vulnerability Assessment Report';
  companyName: string = 'Your Company Name';
  reportDate: string = new Date().toLocaleDateString();
}
