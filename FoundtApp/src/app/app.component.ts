import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Inbox', url: '/settings', icon: 'cog'},
    {title: 'Outbox', url: '/home/add-item', icon: 'paper-plane'}
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private readonly translate: TranslateService) {
    let language = this.translate.getBrowserLang();
    if (!language || (language != 'en' && language != 'es')) {
      language = 'en';
    }
    translate.setDefaultLang(language);
    translate.use(language);
  }
}
