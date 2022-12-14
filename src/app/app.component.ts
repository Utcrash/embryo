import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(translate: TranslateService, private router: Router) {
      translate.addLangs(['en', 'fr']);
      translate.setDefaultLang('en');
      translate.use('en');
      // const browserLang: string = translate.getBrowserLang();
      // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }
}
