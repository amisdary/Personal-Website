import { Component } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    standalone: false
})
export class ContentComponent {

  displayString = "";

  listOfStringsToDisplay: string[] = [
    "Born and raised in New Jersey.",
    "Studied Finance at Carnegie Mellon.",
    "Worked at an Investment Firm in Princeton after college.",
    "Completed a Computer Science Course at NYU.",
    "Started my own small business.",
    "Interned as a Software Engineer at a startup.",
    "Currently working as a Software Engineer at Burlington Coat Factory."
  ]

  outputString(): string {
    // addEventListener(scrollY, window.scrollY)
    return ""
  }

  lengthOfDisplayStringList: number = this.listOfStringsToDisplay.length

}
