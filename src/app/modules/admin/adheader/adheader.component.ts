import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/common_service/validate.service'
import { AuthService } from 'src/app/common_service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-adheader',
  templateUrl: './adheader.component.html',
  styleUrls: ['./adheader.component.css']
})
export class AdheaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }
  onadminLogoutClick() {
    this.authService.adminlogout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['admin/login']);
    return false;
  }
}
