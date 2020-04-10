import { CrudService } from './common_service/crud.service';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DefaultModule} from './layouts/default/default.module';
import {AdminModule} from './layouts/adminlayout/admin.module';
import {PageService} from './common_service/page.service';
import {ConfigService} from './common_service/ConfigService.service';
import {routes} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ValidateService } from 'src/app/common_service/validate.service'
import { AuthService } from 'src/app/common_service/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import {ModalModule} from 'ngx-bootstrap/modal';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("54104912998-0q49pk98crukcasftf873mkttj3ubd8e.apps.googleusercontent.com")
  }
]);
 
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    AdminModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
    ModalModule.forRoot(),
    SocialLoginModule
  ],
  providers: [PageService,ValidateService, AuthService, AuthGuard,ConfigService,CrudService,{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
