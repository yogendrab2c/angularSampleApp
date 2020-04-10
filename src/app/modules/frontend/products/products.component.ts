import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import {PageService} from 'src/app/common_service/page.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/common_service/crud.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('min', {static: true }) min: ElementRef;
  @ViewChild('max', {static: true }) max: ElementRef;
  records:any ;
  page:any;
  totalRec:any;
  constructor(
    private pgServ:PageService,
    private router:Router,
    private route: ActivatedRoute,
    private CrudService:CrudService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(params.hasOwnProperty('page')){
        this.page= (parseInt(params.page)>0)?parseInt(params.page):1;
      }
     
    });
    this.getdata(this.page,'');
  }
  modelChanged(newObj) {
    this.getdata(1,newObj);
}
  getdata(page,srch){
    let min,max: any ;
    this.route.queryParams.subscribe(params=>{
      if(params.hasOwnProperty('page')){
        this.page= (parseInt(params.page)>0)?parseInt(params.page):1;
      }
      if(params.hasOwnProperty('min')){
        min = parseInt(params.min);
      }
      if(params.hasOwnProperty('max')){
        max = parseInt(params.max);
      }
     
    });
     const query = {"page": page ,"search":srch,"min":min,"max":max};
    this.CrudService.list(query,'ads').subscribe(data => {
       this.records = data.data;
       this.totalRec=data.total;
    });
  }
 
  handleClick() {
    this.page=1;
   const queryParams = 
    {  min: this.min.nativeElement.value,
      max: this.max.nativeElement.value };
      this.router.navigate(
[], 
{
  relativeTo: this.route,
  queryParams: queryParams, 
  queryParamsHandling: 'merge'
});
this.getdata(this.page,'');
    
  }

  
 

  getPage(page: number) {
    
    this.page=page;
    console.log(this.page);
    const queryParams = { page: this.page };
      this.router.navigate(
[], 
{
  relativeTo: this.route,
  queryParams: queryParams, 
  queryParamsHandling: 'merge',
});

    this.getdata(this.page,'');
  }

}
