import { LinksService } from './../../links.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent implements OnInit {

  headers;
  applicationName: string = "André Misdary"

  constructor(
    private service: LinksService,
    private sanitizer: DomSanitizer
  ) {
    this.headers = service.getHeaders();
  }

  openResume() {
    let pdfUrl = './assets/Andre-Misdary-Resume.pdf'
    window.open(pdfUrl, '_blank')
  }

  ngOnInit(): void {
  }

}
