import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  // pdfFilePath = ".\assets\Andre-Misdary-Resume.pdf";
  pdfFilePath = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  title = 'sampleapp';
 
  public page = 2;
 
  public pageLabel!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
