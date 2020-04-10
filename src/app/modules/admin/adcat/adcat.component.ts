import { Component, OnInit ,ViewChild,TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/common_service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-adcat',
  templateUrl: './adcat.component.html',
  styleUrls: ['./adcat.component.css']
})
export class AdcatComponent implements OnInit {
  cats:any ;
  page:any;
  totalRec:any;
  modalRef: BsModalRef;
  name: String;
  url: String;
  constructor(private authService:AuthService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private router:Router,
    private modalService:BsModalService
    )
     {  
      this.page=1;
      this.totalRec=0;
     }
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
        const query = {"page": page ,"search":srch};
        this.authService.getCategories(query).subscribe(data => {
          this.cats = data.cats;
          this.totalRec=data.total;
        });
      }
       getPage(page: number) {
        this.page=page;
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
        deleteCat(id){
          if (confirm("Want to delete confirm")) {
            const form_data = {
              "id": id
            }
            this.authService.deleteById(form_data).subscribe(data => {
              this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
              const index = this.cats.findIndex(cat => cat._id === id);
              this.cats.splice(index, 1);
             },
              err => {
              });
          }
         
        }
      
        changeSts(id,sts){
      
          if (confirm("Want to change sts")) {
            const form_data = {
              "id": id,
              "sts":sts==0 ? 1 : 0
            }
            const index = this.cats.findIndex(cat => cat._id === id);
             this.cats[index].status=sts==0 ? 1 : 0;
        
            this.authService.catSts(form_data).subscribe(data => {
              this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
              const index = this.cats.findIndex(cat => cat._id === id);
             this.cats[index].sts=sts==0 ? 1 : 0;
             },
              err => {
              });
          }
         
        }
        openModal(template: TemplateRef<any>) {
          this.modalRef = this.modalService.show(template);
        }
        onAdd() {
          const cat = {
            name: this.name,
            url: this.url
          }
          if((this.name==undefined || this.name=='') || (this.url=='' || this.url==undefined)){
            this.flashMessage.show("Fill all form details", {cssClass: 'alert-danger', timeout: 5000}); 
          } else{
            this.authService.addCat(cat).subscribe(data => {
              if(data.success) {
                this.name="";
                this.url="";
               this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
               this.modalRef.hide();
                this.getdata(1,'');
              } else {
                this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
              }
          });
          }
        
        }

}
