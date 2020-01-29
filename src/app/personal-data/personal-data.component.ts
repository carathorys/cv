import { Component } from '@angular/core';

@Component({
  selector: 'cv-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {

  constructor() {
  }

  phoneContact() {
    window.open('tel:+36202343963', '_self');
  }

  mailContact() {
    window.open('mailto:gallayb+GitHubCV@gmail.com?subject=Contact through Online CV', '_self');
  }
}
