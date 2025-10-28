import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    standalone: false
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayString: string = "";

  listOfStringsToDisplay: string[] = [
    "Born and raised in New Jersey.",
    "Studied Finance at Carnegie Mellon.",
    "Worked at an Investment Firm in Princeton after college.",
    "Completed a Computer Science Course at NYU.",
    "Started my own small business.",
    "Interned as a Software Engineer at a startup.",
    "Currently working as a Software Engineer at Burlington Coat Factory."
  ]

  outputString(listOfStringsToDisplay: string[]): string {
    // addEventListener(scrollY, window.scrollY)
    return ""
  }

  lengthOfDisplayStringList: number = this.listOfStringsToDisplay.length

}
