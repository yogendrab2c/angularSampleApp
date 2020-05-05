import { Injectable } from '@angular/core';
@Injectable()
export class PageService {


  pageInfo(com_obj,pagedata) {
       com_obj.title.setTitle(pagedata.page_title);
      com_obj.meta.updateTag({name:'keywords',content:pagedata.meta_data.Keywords});
      com_obj.meta.updateTag({name:'description',content:pagedata.meta_data.description}); 
  }
}
