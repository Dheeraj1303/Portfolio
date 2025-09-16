import { Component } from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent {

  sections = [
    'Cover Page',
    'Executive Summary',
    'Vulnerability List',
    'Severity Chart',
    'Vulnerability Details',
    'Recommendations',
    'Appendix'
  ];
}
