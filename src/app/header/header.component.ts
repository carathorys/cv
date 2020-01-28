import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

interface Menu {
  path: string;
}

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openMenu: EventEmitter<Event>;
  @Input() pageTitle: string;

  navigation: Menu[];

  constructor(public readonly translateService: TranslateService) {
    this.openMenu = new EventEmitter<Event>(true);
    this.navigation = [
      {
        path: marker('personalData')
      },
      {
        path: marker('experiences')
      },
      {
        path: marker('educations')
      },
      {
        path: marker('skills')
      },
      {
        path: marker('contact')
      }
    ];
  }

  ngOnInit() {
  }

  facebook(evt: Event) {
    window.open('https://facebook.com/gallayb', 'social_media', '', true);
  }

  github(evt: Event) {
    window.open('https://github.com/carathorys', 'social_media', '', true);
  }

  linkedin(evt: Event) {
    window.open('https://www.linkedin.com/in/bal%C3%A1zs-gallay-b9b1b834/', 'social_media', '', true);
  }

  en() {
    this.translateService.use('en');
  }

  hu() {
    this.translateService.use('hu');
  }
}
