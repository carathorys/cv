import { Component, OnInit, HostListener, ElementRef, HostBinding } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';

import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = marker('PAGE_TITLE');

  public scrollSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly titleService: Title,
    private readonly translateService: TranslateService,
    private elRef: ElementRef
  ) {
    this.iconRegistry.registerFontClassAlias('FontAwesome', 'fa');
    this.translateService.addLangs(['hu']);

    const previousLanguage = localStorage.getItem('lang');
    if (!!previousLanguage && !!this.translateService.getLangs().find(x => x === previousLanguage)) {
      this.translateService.use(previousLanguage);
    } else {
      this.translateService.getLangs().filter(x => x === this.translateService.getBrowserLang()).length > 0
        ? this.translateService.use(this.translateService.getBrowserLang())
        : this.translateService.use('en');
    }
    this.translateService.get(this.title).subscribe(d => this.titleService.setTitle(d));
    this.translateService.onLangChange.subscribe(x => {
      localStorage.setItem('lang', x.lang);
    });
  }

  @HostListener('document:scroll', [])
  onScroll(evt: any): void {
    const scroller = document.scrollingElement || document.body;
    if (scroller.scrollTop === 0) {
      this.scrollSubject.next(false);
    } else {
      this.scrollSubject.next(true);
    }
  }

  ngOnInit(): void {
  }
}
