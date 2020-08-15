import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ɵɵInheritDefinitionFeature
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Observable, BehaviorSubject } from 'rxjs';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

class Menu {
  public get path(): string {
    return this.title.substring(4);
  }

  constructor(public readonly title: string) {
  }
}

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('myStyle', [
      state('float', style({
        opacity: 0.7,
        boxShadow: '0 0 15px #000'
      })),
      state('fixed', style({
        opacity: 1,
        boxShadow: '0 1px 3px #000'
      })),
      transition('* => *', [animate('300ms')])
    ])
  ]
})
export class HeaderComponent {
  @Output() openMenu: EventEmitter<Event>;
  @Input() pageTitle: string;
  @Input() public scrolled: boolean = true;

  navigation: Menu[];

  constructor(public readonly translateService: TranslateService) {
    this.openMenu = new EventEmitter<Event>(true);
    this.navigation = [
      new Menu(marker('nav.personalData')),
      new Menu(marker('nav.experiences')),
      new Menu(marker('nav.educations')),
      new Menu(marker('nav.skills')),
      new Menu(marker('nav.contact'))
    ];
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
