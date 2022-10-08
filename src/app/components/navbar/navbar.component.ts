import { LinksService } from './../../links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  headers;

  constructor(service: LinksService) {
    this.headers = service.getHeaders();

  }

  ngOnInit(): void {
  }

}
