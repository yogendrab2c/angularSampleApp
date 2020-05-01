import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {AdminlayoutComponent} from 'src/app/layouts/adminlayout/adminlayout.component';
import { AdloginComponent } from 'src/app/modules/admin/adlogin/adlogin.component';
import { AdheaderComponent } from 'src/app/modules/admin/adheader/adheader.component';
import { AdfooterComponent } from 'src/app/modules/admin/adfooter/adfooter.component';
import { AdcatComponent } from 'src/app/modules/admin/adcat/adcat.component';
import { AdbrandComponent } from 'src/app/modules/admin/adbrand/adbrand.component';
import { AdattrComponent } from 'src/app/modules/admin/adattr/adattr.component';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReactiveFormsModule} from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule, MatInputModule,MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [
    AdminlayoutComponent,
    AdheaderComponent,
    AdfooterComponent,
    AdcatComponent,
    AdbrandComponent,
    AdattrComponent,
    AdloginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxPaginationModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlashMessagesModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports:[FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
