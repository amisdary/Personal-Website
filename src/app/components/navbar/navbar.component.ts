import { LinksService } from './../../links.service';
import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {

  private service = inject(LinksService);
  private sanitizer = inject(DomSanitizer);

  headers;
  applicationName = "André Misdary"

  constructor() {
    this.headers = this.service.getHeaders();
  }

  openResume() {
    const pdfUrl = './assets/Andre-Misdary-Resume.pdf'
    window.open(pdfUrl, '_blank')
  }

}
