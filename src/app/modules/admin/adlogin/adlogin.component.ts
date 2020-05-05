import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/common_service/validate.service'
import { AuthService } from 'src/app/common_service/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
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
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService) { }

    loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [
        Validators.required
      ]]
    });

  ngOnInit() {  
    if(this.authService.loggedIn()) {
      this.router.navigate(['admin/category']);
    } else {
      this.router.navigate(['admin/login']);
    } 
  }
  onLoginSubmit() {
    const user = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }
   
      this.authService.authenticateUser(user).subscribe(data => {
        if(data.success) {
         
         
          this.authService.storeAdminData(data.data.token,data.data.name);
          this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['admin/category']);
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        }
    });
    
  
  }
  
}
