import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { DefaultComponent } from './default.component';
import { PostComponent } from 'src/app/modules/frontend/post/post.component'
import { ProductComponent } from 'src/app/modules/frontend/product/product.component';
import { FheaderComponent } from 'src/app/modules/frontend/fheader/fheader.component';
import { FooterComponent } from 'src/app/modules/frontend/footer/footer.component'
import { ProductsComponent } from 'src/app/modules/frontend/products/products.component';
import { NavComponent } from 'src/app/modules/frontend/nav/nav.component';
import { HomeComponent } from 'src/app/modules/frontend/home/home.component'
import { ContactsComponent } from 'src/app/modules/frontend/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomecarouselComponent } from 'src/app/modules/frontend/homecarousel/homecarousel.component';
import { MultipurposesliderComponent } from 'src/app/modules/frontend/multipurposeslider/multipurposeslider.component';

@NgModule({
  declarations: [
    DefaultComponent,
    PostComponent,
    ProductComponent,
    FheaderComponent,
    FooterComponent,
    ProductsComponent,
    NavComponent,
    HomeComponent,
    ContactsComponent,
    HomecarouselComponent,
    MultipurposesliderComponent
  ],
  imports: [
   CommonModule,
   RouterModule,
   NgxPaginationModule,
   FlashMessagesModule.forRoot(),
   CarouselModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DefaultModule { }
