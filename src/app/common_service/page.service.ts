import { Injectable } from '@angular/core';
import {Title , Meta} from '@angular/platform-browser';
@Injectable()
export class PageService {

  constructor(
    private pageTitle :Title,
    private meta:Meta
  ){

  }

  pageInfo(com_obj,pagedata) {
    com_obj.pageTitle.setTitle("vidfjidfjigjijgr");
    // com_obj.meta.addTag({name:'Page',content:'Home Page'});
    // com_obj.meta.addTag({name:'author',content:'Index Page'});
    // com_obj.meta.updateTag({name:'Keywords',content:'Happy Moment'});
    // com_obj.meta.updateTag({name:'description',content:'This is all about happy moment'}); 
  }
}
