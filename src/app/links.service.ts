import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  getHeaders() {
    return [{'name': 'HOME', 'link': ''}, {'name': 'RESUME', 'link': '/resume'}, {'name': 'PROJECTS', 'link': '/projects'}]
  }
}
