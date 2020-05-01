import { Component, OnInit } from '@angular/core';
import {Router,RouterEvent,NavigationEnd} from '@angular/router';
import {LanguageService} from '../../common_service/language.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
page ='';
  constructor(private router :Router,public siteService: LanguageService) { 
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event instanceof NavigationEnd){
        var lastindex=window.location.pathname.lastIndexOf('/')+1;
        this.page = window.location.pathname.substring(lastindex);
        this.siteService.page.next(this.page);

      
      }
    });
    if(window.location.pathname.match('/ar/') || window.location.pathname=='/ar'){
      this.siteService.selectedLang.next('ar');
    } else{
      this.siteService.selectedLang.next('en');
    }
  }

  ngOnInit() {
  }

}
