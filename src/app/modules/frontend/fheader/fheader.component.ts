import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from '../../../common_service/language.service';
@Component({
  selector: 'app-fheader',
  templateUrl: './fheader.component.html',
  styleUrls: ['./fheader.component.css']
})
export class FheaderComponent implements OnInit {
currentlang = 'en';
sitelang = '';
browserlang = '';
page='';

constructor(private translate: TranslateService,public siteService: LanguageService) {
  this.siteService.selectedLang.subscribe(res=>{
    this.currentlang=res;
    if(res == 'ar'){
      this.sitelang='ar';
    } else{
      this.sitelang='';
    }
    
});
this.siteService.page.subscribe(res=>{
this.page=res;
});
translate.addLangs(['en','ar']);
translate.setDefaultLang('en');
translate.use(this.currentlang);
// this.browserlang=translate.getDefaultLang();
// this.laguagechanged();
// this.siteService.selectedLang.next(this.browserlang);
}

laguagechanged(){
  this.translate.use(this.browserlang.match('de|en/')?this.browserlang:'en');
}
switchLanguage(language: string) {
      this.siteService.selectedLang.next(language);
      this.currentlang=language;
      this.translate.use(language);
      if(language == 'de'){
        this.sitelang='de';
      } else{
        this.sitelang='';
      }
}
  ngOnInit() {
  }

}
