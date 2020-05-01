import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PostComponent } from 'src/app/modules/frontend/post/post.component';
import { ProductsComponent } from 'src/app/modules/frontend/products/products.component';
import { ProductComponent } from 'src/app/modules/frontend/product/product.component';
import { HomeComponent } from 'src/app/modules/frontend/home/home.component'
import { ContactsComponent } from 'src/app/modules/frontend/contacts/contacts.component';
import { AdloginComponent } from 'src/app/modules/admin/adlogin/adlogin.component';
import {AdminlayoutComponent} from 'src/app/layouts/adminlayout/adminlayout.component';
import { AdcatComponent } from 'src/app/modules/admin/adcat/adcat.component';
import { AdbrandComponent } from 'src/app/modules/admin/adbrand/adbrand.component';
import { AdattrComponent } from 'src/app/modules/admin/adattr/adattr.component';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path:'',component:DefaultComponent,
    children:[
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home',component:HomeComponent},
      {path:'contactus',component:ContactsComponent},
      {path:'post',component:PostComponent},
      {path:'products',component:ProductsComponent},
      {path:'product',component:ProductComponent}
    ]
  },
  {
    path:'ar',component:DefaultComponent,
    children:[
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home',component:HomeComponent},
      {path:'contactus',component:ContactsComponent},
      {path:'post',component:PostComponent},
      {path:'products',component:ProductsComponent},
      {path:'product',component:ProductComponent}
    ]
  },
  {
    path:'admin',component:AdminlayoutComponent,
    children:[
      { path: '', redirectTo: '/category', pathMatch: 'full' },
      { path: 'login', component: AdloginComponent },
      {path:'category',component:AdcatComponent ,canActivate:[AuthGuard]},
      {path:'brand',component:AdbrandComponent,canActivate:[AuthGuard]},
      {path:'attributes',component:AdattrComponent,canActivate:[AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
