
import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../../common_service/crud.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-adbrand',
  templateUrl: './adbrand.component.html',
  styleUrls: ['./adbrand.component.css']
})

export class AdbrandComponent implements OnInit {
  datas: any;
  page: any;
  totalRec: any;
  selectedFile: File;
  imgURL: any;
  modalRef: BsModalRef;
  name: String;
  brandImage: String;
  public imagePath;
  public message: string;
  constructor(
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private crud: CrudService
  ) {
    this.page = 1;
    this.totalRec = 0;
  }
  brandForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', [
      Validators.required,
      RxwebValidators.extension({ extensions: ["jpeg", "gif", "jpg", "png"] })
    ]]
  });

  ngOnInit() {
    this.getdata(this.page, '');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getdata(page, srch) {
    const query = { "page": page, "search": srch };
    this.crud.list(query, 'admin/brands').subscribe(data => {
      this.datas = data.data;
      this.totalRec = data.total;
    });
  }
  getPage(page: number) {
    this.page = page;
    const queryParams = { page: this.page };
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });

    this.getdata(this.page, '');
  }
  onAdd() {
    const formData = new FormData();
    formData.append('brandImage', this.selectedFile, this.selectedFile.name);
    formData.append('name', this.brandForm.controls['name'].value);
    this.crud.add(formData, 'admin/brands/add').subscribe(res => {
      if (res.success) {
        this.brandForm.reset();
        this.brandForm.controls['image'].setValue(null);
        this.imgURL = '';
        this.getdata(1, '');
        this.modalRef.hide();
        this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 5000 });
      } else {
        this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    });

  }

  delete(id) {
    if (confirm("Want to delete confirm")) {
      const url = "admin/brands/" + id;
      this.crud.delete(url).subscribe(res => {
        if (res.success) {
          this.getdata(1, '');
          this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 5000 });
        } else {
          this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
        }
      });
    }

  }

  changeSts(id, sts) {

    if (confirm("Want to change sts")) {
      const url = "admin/brands/" + id;
      const form_data = 
        [
          {"key":"status", "value":sts == 0 ? 1 : 0}
        ];
      const index = this.datas.findIndex(cat => cat._id === id);
      this.datas[index].status = sts == 0 ? 1 : 0;

      this.crud.withOutImage(form_data, url).subscribe(res => {

        if (res.success) {
          const index = this.datas.findIndex(cat => cat._id === id);
          this.datas[index].sts = sts == 0 ? 1 : 0;
          this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 5000 });
        } else {
          this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
        }

      },
        err => {
        });
    }

  }

  preview(event) {
        this.imgURL = '';
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
      var ext = this.selectedFile.name.substr(this.selectedFile.name.lastIndexOf('.') + 1);
      if(ext=='png' || ext=='jpg' || ext=='jpeg' || ext=='gif'){
        var reader = new FileReader();
         reader.readAsDataURL(event.target.files[0]); // read file as data url
          reader.onload = (event) => { // called once readAsDataURL is completed
          this.imgURL = reader.result;
        }
      } else{
        this.imgURL = '';
      }
    }

  }
}
