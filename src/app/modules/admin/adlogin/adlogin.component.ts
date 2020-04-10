import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/common_service/validate.service'
import { AuthService } from 'src/app/common_service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {
  username: String;
  password: String;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {  
    if(this.authService.loggedIn()) {
      this.router.navigate(['admin/category']);
    } else {
      this.router.navigate(['admin/login']);
    } 
  }
  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    if((this.username==undefined || this.username=='') || (this.password=='' || this.password==undefined)){
      this.flashMessage.show("Fill all form details", {cssClass: 'alert-danger', timeout: 5000}); 
    } else{
      this.authService.authenticateUser(user).subscribe(data => {
        if(data.success) {
          this.authService.storeAdminData(data.token, data.user);
          this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['admin/category']);
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
    });
    }
  
  }
  
}
